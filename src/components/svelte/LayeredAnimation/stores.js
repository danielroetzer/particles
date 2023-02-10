import { writable } from 'svelte/store';
import { easings, customEasings } from '@utils/animation';
import { randomFloat, randomInt } from '@utils/math';
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

    const easingX = easingNames[randomInt(0, easingNames.length - 1)];

    const easingY = easingNames.filter(easing => easing !== easingX)[
        easingNames.length - 2
    ];

    EasingX.set(easingX);
    EasingY.set(easingY);
};
