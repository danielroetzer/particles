// import { interpolate } from 'polymorph-js';
import { interpolateString as interpolate } from 'd3-interpolate';
import { get, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { sineInOut } from 'svelte/easing';
import { blobPaths } from './blobs';

export const Duration = writable(1000);
export const LastTweenedBlobPath = writable(blobPaths[0]);
export const NexTweenedBlobPath = writable();
export const FillBlobs = writable(true);

export const BlobPathTweened = tweened(blobPaths[0], {
    duration: get(Duration),
    easing: sineInOut,
    // todo: compare performance with polymorph-js
    interpolate,
    // interpolate: function (prevPath, nextPath) {
    //     return interpolate([prevPath, nextPath]);
    // },
});
