// @ts-nocheck
// 初始化计时器
import {
  initClockPosition
} from "../util";
import {
  targetHexArray,
  sunColorHexArray,
  SunColorHexArrayBottom
} from "../color.config";
import {
  lightenHexColor,
  generateColorTransition
} from "../util";

let timer = null;
// 监听主线程的消息
self.onmessage = function (event) {
  const action = event.data.message;
  if (action === "run") {
    // 启动计时器
    run();
    startTimer();

    /**
     * @type {string[]}
     */
    let generColorMapper = [];
    targetHexArray.forEach((item, index) => {
      const color = lightenHexColor(`#${item}`, 0.2);
      const nextColor = lightenHexColor(
        `#${targetHexArray[index === 11 ? 0 : index + 1]}`,
        0.2
      );
      // @ts-ignore
      generColorMapper.push(...generateColorTransition(color, nextColor, 30));
    });
    const sunColorMapper = sunColorHexArray.map(colors => {
      return generateColorTransition(colors[0], colors[1], 12)
    })
    const sunColorBottomMapper = SunColorHexArrayBottom.map(colors => {
      return generateColorTransition(colors[0], colors[1], 12)
    })
    const renderSunColorMapper = []
    const renderSunColorMapperBottom = []
    sunColorMapper.forEach((colors, index) => {
      if (index !== sunColorHexArray.length - 1) {
        let colorsTemp = colors.map((citem, cIndex) => {
          return generateColorTransition(citem, sunColorMapper[index + 1][cIndex], 480)
        })
        for (let i = 0; i < 479; i++) {
          let tempArray = []
          for (let o = 0; o < 13; o++) {
            tempArray.push(colorsTemp[o][i])
          }
          renderSunColorMapper.push(tempArray)
        }
      }
    })
    sunColorBottomMapper.forEach((colors, index) => {
      if (index !== SunColorHexArrayBottom.length - 1) {
        let colorsTemp = colors.map((citem, cIndex) => {
          return generateColorTransition(citem, sunColorBottomMapper[index + 1][cIndex], 480)
        })
        for (let i = 0; i < 479; i++) {
          let tempArray = []
          for (let o = 0; o < 13; o++) {
            tempArray.push(colorsTemp[o][i])
          }
          renderSunColorMapperBottom.push(tempArray)
        }
      }
    })

    // middle color backgroundColor
    const renderSunColorMapperMiddle = []
    renderSunColorMapper.forEach((item, index) => {
      const tempArray = []
      console.log(item, 'item')
    })

    self.postMessage({
      generColorMapper,
      sunColorMapper,
      renderSunColorMapper,
      renderSunColorMapperBottom,
      renderSunColorMapperMiddle,
    });
  }
};

function run() {
  const {
    hourDegree,
    minuteDegree
  } = initClockPosition();
  // 将结果发送回主线程
  self.postMessage({
    hourDegree: hourDegree,
    minuteDegree: minuteDegree,
    timerInfo: new Date(),
  });
}

// 计时器逻辑
function startTimer() {
  timer = setInterval(function () {
    run();
  }, 1000); // 每秒更新一次
}
