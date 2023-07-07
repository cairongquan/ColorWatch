/** 使hex颜色变量变深 */
export function darkenHexColor(hexColor, ratio) {
  // 移除 # 符号（如果存在）
  hexColor = hexColor.replace("#", "");

  // 解析十六进制颜色为 RGB 值
  var r = parseInt(hexColor.substring(0, 2), 16);
  var g = parseInt(hexColor.substring(2, 4), 16);
  var b = parseInt(hexColor.substring(4, 6), 16);

  // 增加每个颜色通道的值
  r = Math.round(r * (1 - ratio));
  g = Math.round(g * (1 - ratio));
  b = Math.round(b * (1 - ratio));

  // 将 RGB 值转换回十六进制颜色表示
  var newHexColor =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");
  return newHexColor;
}
/** 使颜色变浅 */
export function lightenHexColor(hexColor, ratio) {
  // 移除 # 符号（如果存在）
  hexColor = hexColor.replace("#", "");

  // 解析十六进制颜色为 RGB 值
  var r = parseInt(hexColor.substring(0, 2), 16);
  var g = parseInt(hexColor.substring(2, 4), 16);
  var b = parseInt(hexColor.substring(4, 6), 16);

  // 减少每个颜色通道的值
  r = Math.round(r + (255 - r) * ratio);
  g = Math.round(g + (255 - g) * ratio);
  b = Math.round(b + (255 - b) * ratio);

  // 将 RGB 值转换回十六进制颜色表示
  var newHexColor =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");
  return newHexColor;
}

/** 使两个颜色平滑过渡 */
export function smoothColorTransition(startColor, endColor, duration, steps) {
  var div = document.getElementById("myDiv");
  var currentStep = 0;
  var stepDuration = duration / steps;
  var rStep = (endColor[0] - startColor[0]) / steps;
  var gStep = (endColor[1] - startColor[1]) / steps;
  var bStep = (endColor[2] - startColor[2]) / steps;

  var startTime = null;

  function changeColor(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);

    var r = Math.round(startColor[0] + rStep * progress);
    var g = Math.round(startColor[1] + gStep * progress);
    var b = Math.round(startColor[2] + bStep * progress);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    div.style.backgroundColor = color;

    if (progress < 1) {
      requestAnimationFrame(changeColor);
    }
  }

  requestAnimationFrame(changeColor);
}

/** 根据分割数字 查询两个颜色渐变颜色 */
export function generateColorTransition(startColor, endColor, numSegments) {
  const hexToRGB = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
  };

  const RGBToHex = (rgb) => {
    return "#" + rgb.map((c) => c.toString(16).padStart(2, "0")).join("");
  };

  const interpolateColor = (start, end, ratio) => {
    const interpolated = start.map((value, index) => {
      const delta = end[index] - value;
      return Math.round(value + delta * ratio);
    });
    return RGBToHex(interpolated);
  };

  const startRGB = hexToRGB(startColor);
  const endRGB = hexToRGB(endColor);
  const colors = [];

  for (let i = 0; i <= numSegments; i++) {
    const ratio = i / numSegments;
    const interpolatedColor = interpolateColor(startRGB, endRGB, ratio);
    colors.push(interpolatedColor);
  }

  return colors;
}

/** 初始化指针位置 */
export function initClockPosition() {
  var now = new Date();
  var currentHour = now.getHours();
  var currentMinute = now.getMinutes();
  // 计算小时刻度
  var hourDegree = (currentHour % 12) * 30;
  // 计算分钟刻度
  var minuteDegree = currentMinute * 6;
  // 考虑分钟对小时的影响
  hourDegree += Math.floor(currentMinute / 2);
  return {
    hourDegree,
    minuteDegree
  }
}