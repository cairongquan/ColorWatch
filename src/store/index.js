import {
    writable
} from "svelte/store";
export const timeValue = writable({
    hourDegree: undefined,
    minuteDegree: undefined
});

export const colorArrayHexList = writable([])