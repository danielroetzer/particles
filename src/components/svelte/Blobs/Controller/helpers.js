import * as easingModule from 'svelte/easing';

export const easingList = Object.keys(easingModule);
export const easingFromName = name => easingModule[name];
