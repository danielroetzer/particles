<script>
    import Grid from './Grid.svelte';
    import { DurationX, DurationY, EasingX, EasingY } from '../stores';

    export let gridSize = 120;
    export let cellsPerLine = 7;
    export let axis = 'combined';

    const dotSize = gridSize / cellsPerLine;
</script>

<div>
    <div
        class="root"
        style:--gridSize={`${gridSize}px`}
        style:--dotSize={`${dotSize}px`}
    >
        <Grid size={gridSize} {cellsPerLine} />

        {#if axis === 'x'}
            <div
                class="xAxis"
                style:animation-duration={`${$DurationX}s`}
                style:animation-timing-function={$EasingX}
            />
        {:else if axis === 'y'}
            <div
                class="yAxis"
                style:animation-duration={`${$DurationY}s`}
                style:animation-timing-function={$EasingY}
            />
        {:else}
            <div
                class="combined"
                style:--durationX={`${$DurationX}s`}
                style:--durationY={`${$DurationY}s`}
                style:--easingX={$EasingX}
                style:--easingY={$EasingY}
            />
        {/if}
    </div>
    <div class="legend">{axis}</div>
</div>

<style>
    .root {
        position: relative;
        height: var(--gridSize);
        width: var(--gridSize);
    }

    .legend {
        margin-top: 10px;
        text-align: center;
    }

    .xAxis,
    .yAxis,
    .combined::after {
        background-color: #f11313;
        opacity: 0.8;
        width: var(--dotSize);
        height: var(--dotSize);
        border-radius: 100%;
    }

    .xAxis,
    .yAxis,
    .combined {
        position: absolute;
        left: calc(var(--dotSize) / -2);
        bottom: calc(var(--dotSize) / -2);
    }

    .xAxis,
    .yAxis,
    .combined,
    .combined::after {
        animation-iteration-count: infinite;
    }

    .xAxis {
        animation-name: xAxis;
    }

    .yAxis {
        animation-name: yAxis;
    }

    .combined {
        animation-name: xAxis;
        animation-duration: var(--durationX);
        animation-timing-function: var(--easingX);
    }

    .combined::after {
        display: block;
        content: '';

        animation-name: yAxis;
        animation-duration: var(--durationY);
        animation-timing-function: var(--easingY);
    }

    @keyframes xAxis {
        50% {
            transform: translateX(var(--gridSize));
        }
    }

    @keyframes yAxis {
        50% {
            transform: translateY(calc(var(--gridSize) * -1));
        }
    }
</style>
