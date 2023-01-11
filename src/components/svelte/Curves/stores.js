import { writable } from 'svelte/store';
import { customEasings } from '@utils/animation';

const initialDuration = {
    x: 2.5,
    y: 2.5,
};

export const initialEasing = {
    x: customEasings['ease-in-out-quart'],
    y: customEasings['ease-in-out-back'],
};

export const DurationX = writable(initialDuration.x);
export const DurationY = writable(initialDuration.y);
export const EasingX = writable(initialEasing.x);
export const EasingY = writable(initialEasing.y);
