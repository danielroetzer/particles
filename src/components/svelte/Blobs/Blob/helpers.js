import { curveBasisClosed, line } from 'd3-shape';
import * as easings from 'svelte/easing';
import { randomInt } from '@utils/math';
import { hueStep } from '../config';

import {
    BlobPathTweened,
    LastTweenedBlobPath,
    NextTweenedBlobPath,
    LastHue,
    HueTweened,
} from '../stores';

// Logic for creating points was inspired from:
// https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/
const createBlobPoints = function (props) {
    const { count = 8, radius = 70, offset = 30 } = props;

    // Used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / count;

    return Array.from({ length: count }, function (_, index) {
        const theta = index * angleStep;
        const radiusWithOffset = radius + randomInt(-offset, offset);

        const x = 100 + Math.cos(theta) * radiusWithOffset;
        const y = 100 + Math.sin(theta) * radiusWithOffset;

        return {
            x: Math.min(180, x),
            y: Math.min(180, y),
        };
    });
};

const closedCurveFromPoints = line()
    .x(p => p.x)
    .y(p => p.y)
    .curve(curveBasisClosed);

export const generateRandomBlobPath = function (props = {}) {
    const { count, offset } = props;

    const points = createBlobPoints({ count, offset });

    return closedCurveFromPoints(points);
};

export const offsetFromComplexity = function (complexity) {
    return (complexity / 2) * 10;
};

export const setNextBlobPath = function (props) {
    const {
        pointCount,
        complexity,
        // optional
        duration,
        easing,
    } = props;

    const nextPath = generateRandomBlobPath({
        count: pointCount,
        offset: offsetFromComplexity(complexity),
    });

    NextTweenedBlobPath.set(nextPath);

    // On tween completion, we set the blob path as completed.
    // This causes the subscription to trigger again, which starts the next tween.
    BlobPathTweened.set(nextPath, {
        duration,
        easing: easing ? easings[easing] : undefined,
    }).then(() => LastTweenedBlobPath.set(nextPath));
};

let isHueForward = false;

export const setNextHue = function (props) {
    const {
        lastHue,
        // optional
        duration,
    } = props;

    if (lastHue >= 360) {
        isHueForward = false;
    } else if (lastHue <= 0) {
        isHueForward = true;
    }

    const nextHue = isHueForward ? lastHue + hueStep : lastHue - hueStep;

    HueTweened.set(nextHue, { duration }).then(() => LastHue.set(nextHue));
};
