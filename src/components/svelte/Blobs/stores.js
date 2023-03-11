import { interpolateString } from 'd3-interpolate';
import { derived, get, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import * as easings from 'svelte/easing';
import { generateRandomBlobPath } from './Blob/helpers';

export const Duration = writable(1000);
export const Easing = writable('sineInOut');
export const FillBlobs = writable(true);
export const PointCount = writable(8);
export const Complexity = writable(5);

export const LastTweenedBlobPath = writable(
    generateRandomBlobPath({
        count: get(PointCount),
    })
);
export const NextTweenedBlobPath = writable();
export const BlobPathTweened = tweened(null, {
    duration: get(Duration),
    easing: easings[get(Easing)],
    interpolate: interpolateString,
});

export const HueDuration = derived(Duration, duration => duration + 200);
export const LastHue = writable(0);
export const HueTweened = tweened(get(LastHue), {
    duration: get(HueDuration),
    easing: easings.linear,
});
