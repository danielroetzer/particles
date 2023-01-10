<script>
    import Grid from './Grid.svelte';
    import { easings } from '@utils/animation';

    let easingX = 'ease-in';
    let easingY = 'ease-out';

    // todo: bind these values to sliders
    let durationX = 2.5;
    let durationY = 2.5;
</script>

<div class="container">
    <select bind:value={easingX}>
        {#each easings as easing}
            <option value={easing}>
                {easing}
            </option>
        {/each}
    </select>

    <Grid>
        <div
            class="xAxis"
            style:--easingX={easingX}
            style:--durationX={`${durationX}s`}
        />
    </Grid>
    <Grid>
        <div
            class="curve"
            style:--easingX={easingX}
            style:--easingY={easingY}
            style:--durationX={`${durationX}s`}
            style:--durationY={`${durationY}s`}
        />
    </Grid>
    <Grid>
        <div
            class="yAxis"
            style:--easingY={easingY}
            style:--durationY={`${durationY}s`}
        />
    </Grid>

    <select bind:value={easingY}>
        {#each easings as easing}
            <option value={easing}>
                {easing}
            </option>
        {/each}
    </select>
</div>

<style>
    .container {
        display: flex;

        gap: 40px;

        padding: 20px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .xAxis,
    .yAxis,
    .curve::after {
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }

    .xAxis,
    .yAxis,
    .curve {
        position: absolute;
        left: -10px;
        bottom: -10px;
    }

    .curve {
        animation: xAxis var(--durationX) infinite var(--easingX);
    }

    .curve::after {
        display: block;
        content: '';
        background-color: green;
        animation: yAxis var(--durationY) infinite var(--easingY);
    }

    .xAxis {
        background-color: blue;
        animation: xAxis var(--durationX) infinite var(--easingX);
    }

    .yAxis {
        background-color: yellow;
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
