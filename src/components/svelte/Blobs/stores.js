import { interpolateString as interpolate } from 'd3-interpolate';
import { get, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { sineInOut } from 'svelte/easing';
import { blobPaths } from './blobs';

export const Duration = writable(1000);
export const LastTweenedBlobPath = writable(blobPaths[0]);
export const NextTweenedBlobPath = writable();
export const FillBlobs = writable(true);

export const BlobPathTweened = tweened(get(LastTweenedBlobPath), {
    duration: get(Duration),
    easing: sineInOut,
    interpolate,
});
