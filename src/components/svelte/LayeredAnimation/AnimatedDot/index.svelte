<script>
    import Grid from './Grid.svelte';
    import { DurationX, DurationY, EasingX, EasingY } from './stores';

    export let size = 100;
    export let axis = 'combined';
</script>

<div class="container">
    <div class="root" style:--size={`${size}px`}>
        <Grid {size} />

        {#if axis === 'x'}
            <div
                class="xAxis"
                style:--easingX={$EasingX}
                style:--durationX={`${$DurationX}s`}
            />
        {:else if axis === 'y'}
            <div
                class="yAxis"
                style:--easingY={$EasingY}
                style:--durationY={`${$DurationY}s`}
            />
        {:else}
            <div
                class="combined"
                style:--easingX={$EasingX}
                style:--easingY={$EasingY}
                style:--durationX={`${$DurationX}s`}
                style:--durationY={`${$DurationY}s`}
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

    .xAxis {
        background-color: black;
        animation: xAxis var(--durationX) infinite var(--easingX);
    }

    .yAxis {
        background-color: black;
        animation: yAxis var(--durationY) infinite var(--easingY);
    }

    .combined {
        animation: xAxis var(--durationX) infinite var(--easingX);
    }

    .combined::after {
        display: block;
        content: '';
        background-color: black;
        animation: yAxis var(--durationY) infinite var(--easingY);
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
