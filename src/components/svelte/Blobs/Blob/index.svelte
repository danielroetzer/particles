<script>
    import { onMount } from 'svelte';
    import { setNextBlobPath, setNextHue } from './helpers';
    import { hueStep } from '../config';

    import {
        BlobPathTweened,
        Complexity,
        Duration,
        PointCount,
        Easing,
        FillBlobs,
        LastTweenedBlobPath,
        LastHue,
        HueDuration,
        HueTweened,
    } from '../stores';

    onMount(function () {
        const unsubscribeBlob = LastTweenedBlobPath.subscribe(function () {
            setNextBlobPath({
                pointCount: $PointCount,
                complexity: $Complexity,
                duration: $Duration,
                easing: $Easing,
            });
        });

        const unsubscribeHue = LastHue.subscribe(function (lastHue) {
            setNextHue({
                lastHue,
                duration: $HueDuration,
            });
        });

        return function () {
            unsubscribeBlob();
            unsubscribeHue();
        };
    });
</script>

<svg
    height="100%"
    width="100%"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
        <linearGradient id="blob-gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color={`hsl(${$HueTweened}, 100%, 75%)`} />
            <stop
                offset="100%"
                stop-color={`hsl(${$HueTweened + hueStep}, 100%, 75%)`}
            />
        </linearGradient>
    </defs>
    <path d={$BlobPathTweened} class:no-fill={!$FillBlobs} />
</svg>

<style>
    svg {
        max-height: 500px;
        --stroke-width: 2px;
    }

    path {
        fill: url(#blob-gradient);
        stroke: url(#blob-gradient);
        stroke-width: var(--stroke-width);
    }

    .no-fill {
        fill: none;
    }
</style>
