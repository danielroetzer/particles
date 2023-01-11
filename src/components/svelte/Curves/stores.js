import { writable } from 'svelte/store';

const initialDuration = {
    x: 2.5,
    y: 2.5,
};

export const initialEasing = {
    x: 'ease-in',
    y: 'ease-out',
};

export const DurationX = writable(initialDuration.x);
export const DurationY = writable(initialDuration.y);
export const EasingX = writable(initialEasing.x);
export const EasingY = writable(initialEasing.y);
