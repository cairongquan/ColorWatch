// 初始化计时器
import { initClockPosition } from "../util";
import { targetHexArray } from "../color.config";
import { lightenHexColor, generateColorTransition } from "../util";

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
    self.postMessage(generColorMapper);
  }
};

function run() {
  const { hourDegree, minuteDegree } = initClockPosition();
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
