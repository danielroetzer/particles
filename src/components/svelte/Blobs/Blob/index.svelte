<script>
    import { onDestroy } from 'svelte';
    import { randomItem } from '@utils/array';
    import { randomInt } from '@utils/math';
    import { blobPaths } from '../blobs';
    import {
        BlobPathTweened,
        Duration,
        FillBlobs,
        LastTweenedBlobPath,
        NexTweenedBlobPath,
    } from '../stores';

    const unsubscribe = LastTweenedBlobPath.subscribe(function (lastPath) {
        const inactiveBlobPaths = blobPaths.filter(path => path !== lastPath);
        const nextPath = randomItem(inactiveBlobPaths);

        NexTweenedBlobPath.set(nextPath);

        // On tween completion, we set the blob path as completed.
        // This causes the subscription to trigger again, which starts the next tween.
        BlobPathTweened.set(nextPath, { duration: $Duration }).then(() =>
            LastTweenedBlobPath.set(nextPath)
        );
    });

    onDestroy(unsubscribe);
</script>

<svg
    height="100%"
    width="100%"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d={$BlobPathTweened}
        transform="translate(100 100)"
        class:no-fill={!$FillBlobs}
    />
</svg>

<style>
    svg {
        max-height: 500px;
        --color: #ff0066;
        --stroke-width: 2px;
    }

    path {
        fill: var(--color);
        stroke: var(--color);
        stroke-width: var(--stroke-width);
    }

    .no-fill {
        fill: none;
    }
</style>
