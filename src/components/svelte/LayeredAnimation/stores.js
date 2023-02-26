import { writable } from 'svelte/store';
import { easings, customEasings } from '@utils/animation';
import { randomItem } from '@utils/array';
import { randomFloat } from '@utils/math';
import { maxDuration, minDuration } from './config';

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

const easingNames = [...easings, ...Object.values(customEasings)];

export const randomize = function () {
    DurationX.set(randomFloat(minDuration, maxDuration));
    DurationY.set(randomFloat(minDuration, maxDuration));

    const easingX = randomItem(easingNames);
    const easingY = randomItem(
        easingNames.filter(easing => easing !== easingX)
    );

    EasingX.set(easingX);
    EasingY.set(easingY);
};
