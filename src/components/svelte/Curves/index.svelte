<script>
    import Grid from './Grid.svelte';
    import Controller from './Controller.svelte';
    import { DurationX, DurationY, EasingX, EasingY } from './stores';
</script>

<div class="container">
    <div class="controllers">
        <Controller axis="x" />
        <Controller axis="y" />
    </div>

    <div class="grids">
        <Grid>
            <div
                class="xAxis"
                style:--easingX={$EasingX}
                style:--durationX={`${$DurationX}s`}
            />
        </Grid>
        <Grid>
            <div
                class="curve"
                style:--easingX={$EasingX}
                style:--easingY={$EasingY}
                style:--durationX={`${$DurationX}s`}
                style:--durationY={`${$DurationY}s`}
            />
        </Grid>
        <Grid>
            <div
                class="yAxis"
                style:--easingY={$EasingY}
                style:--durationY={`${$DurationY}s`}
            />
        </Grid>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;

        gap: 40px;

        padding: 20px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .controllers,
    .grids {
        display: flex;
    }

    .controllers {
        justify-content: space-between;
    }

    .grids {
        gap: 40px;
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
