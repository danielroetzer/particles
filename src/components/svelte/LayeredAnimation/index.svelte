<script>
    import Controller from './Controller/index.svelte';
    import AnimatedDot from './AnimatedDot/index.svelte';
</script>

<div class="container">
    <div class="controllers">
        <Controller axis="x" />
        <Controller axis="y" />
    </div>

    <div class="grids">
        <AnimatedDot axis="x" />
        <AnimatedDot />
        <AnimatedDot axis="y" />
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
</style>
