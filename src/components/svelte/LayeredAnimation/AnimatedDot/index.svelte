<script>
    import Grid from './Grid.svelte';
    import { DurationX, DurationY, EasingX, EasingY } from '../stores';

    export let size = 100;
    export let axis = 'combined';
</script>

<div class="container">
    <div class="root" style:--size={`${size}px`}>
        <Grid {size} />

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
    .legend {
        margin-top: 10px;
        text-align: center;
    }

    .root {
        position: relative;
        height: var(--size);
        width: var(--size);

        background-color: white;

        border: 1px solid gray;
    }

    .xAxis,
    .yAxis,
    .combined::after {
        background-color: black;
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }

    .xAxis,
    .yAxis,
    .combined {
        position: absolute;
        left: -10px;
        bottom: -10px;
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
            transform: translateX(100px);
        }
    }

    @keyframes yAxis {
        50% {
            transform: translateY(-100px);
        }
    }
</style>
