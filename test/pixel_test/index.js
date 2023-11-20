const opentype = require('opentype.js');
const fs = require('fs');
const simplify = require('simplify-js');

function roundToPrecision(number, precision) {
  const multiplier = 10 ** precision;
  return Math.floor(number * multiplier) / multiplier;
}

function generatePathMatrix(fontPath, text, fontSize, resolution = 50, tolerance = 1, subArrayLength = 10, precision = 2) {
  const fontBuffer = fs.readFileSync(fontPath).buffer;
  const font = opentype.parse(fontBuffer);
  const path = font.getPath(text, 0, 0, fontSize);
  const boundingBox = path.getBoundingBox();
  if (!path || !path.commands) {
    console.error('Invalid path');
    return;
  }
  const processedPath = path.commands.map((point, index) => {
    if (point.type === 'Z') {
      // 替换为路径的起始点坐标，可以根据实际需要进行调整
      return {
        type: 'Z',
        x: path.commands[index - 1].x,
        y: path.commands[index - 1].y
      };
    }
    return point;
  });


  const filteredPath = processedPath
    .filter(point => typeof point.x === 'number' && typeof point.y === 'number')
    .map(point => ({
      x: roundToPrecision(point.x, precision),
      y: roundToPrecision(point.y, precision)
    }));

  const simplifiedPath = simplify(filteredPath, tolerance, true);

  function isPointInsidePolygon(point, polygon) {
    const x = point.x;
    const y = point.y;

    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x;
      const yi = polygon[i].y;
      const xj = polygon[j].x;
      const yj = polygon[j].y;

      const intersect = ((yi > y) !== (yj > y)) &&
        (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
      if (intersect) isInside = !isInside;
    }

    return isInside;
  }


  const cellWidth = (boundingBox.x2 - boundingBox.x1) / resolution;
  const cellHeight = (boundingBox.y2 - boundingBox.y1) / resolution;

  const pathMatrix = [];
  for (let y = 0; y < resolution; y++) {
    const subArray = [];

    for (let x = 0; x < resolution; x++) {
      const px = boundingBox.x1 + x * cellWidth + cellWidth / 2;
      const py = boundingBox.y1 + y * cellHeight + cellHeight / 2;

      const roundedPx = roundToPrecision(px, precision);
      const roundedPy = roundToPrecision(py, precision);

      // 判断坐标是否在简化后的路径内
      const inside = isPointInsidePolygon({
        x: roundedPx,
        y: roundedPy
      }, simplifiedPath.map(point => ({
        x: roundToPrecision(point.x, precision),
        y: roundToPrecision(point.y, precision)
      })));
      subArray.push(inside ? 1 : 0);
    }

    pathMatrix.push(subArray);
  }

  return pathMatrix;
}

// 示例数据
const fontPath = '../SourceCodePro-Regular-12.ttf';
const text = '0';
const fontSize = 100;

const resolution = 18;
const tolerance = .1;
const subArrayLength = 20;
const precision = 1;
const pathMatrix = generatePathMatrix(fontPath, text, fontSize, resolution, tolerance, subArrayLength, precision);

if (pathMatrix) {
  fs.writeFileSync('output.txt', JSON.stringify(pathMatrix))
}
