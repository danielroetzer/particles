<script>
    import { onDestroy } from 'svelte';
    import { setNextBlobPath } from './helpers';

    import {
        BlobPathTweened,
        Complexity,
        Duration,
        PointCount,
        Easing,
        FillBlobs,
        LastTweenedBlobPath,
    } from '../stores';

    const unsubscribe = LastTweenedBlobPath.subscribe(function () {
        setNextBlobPath({
            pointCount: $PointCount,
            complexity: $Complexity,
            duration: $Duration,
            easing: $Easing,
        });
    });

    onDestroy(unsubscribe);
</script>

<svg
    height="100%"
    width="100%"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d={$BlobPathTweened} class:no-fill={!$FillBlobs} />
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
