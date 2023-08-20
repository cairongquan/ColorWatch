import { writable } from "svelte/store";

export const timeValue = writable({
  hourDegree: undefined,
  minuteDegree: undefined,
  timerInfo: "",
});

export const colorArrayHexList = writable([]);

export const themeMode = writable("light")