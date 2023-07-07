import { writable } from "svelte/store";

import dayjs from "dayjs";

export const timeValue = writable({
  hourDegree: undefined,
  minuteDegree: undefined,
  timerInfo: "",
});

export const colorArrayHexList = writable([]);
