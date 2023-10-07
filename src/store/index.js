import {
  writable
} from "svelte/store";
import {
  initSunRiseSetData
} from '../util/index'
import sunRiseSetData from '../request/sunRest.api'

export const timeValue = writable({
  hourDegree: undefined,
  minuteDegree: undefined,
  timerInfo: "",
});
// color
export const colorArrayHexList = writable([]);
export const themeMode = writable("light")
// sun
export const userLocalInfo = writable({
  latitude: '',
  longitude: ''
})
export const sunRiseSetInfo = writable(initSunRiseSetData(sunRiseSetData.results))
export const sunColorHexArray = writable([])
export const baseRenderSunColorHexArray = writable([])
export const baseRenderSunColorBottomHexArray = writable([])
export const baseRenderSunColorMiddleHexArray = writable([])
