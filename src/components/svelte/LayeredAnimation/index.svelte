<script>
    import Controller from './Controller/index.svelte';
    import AnimatedDot from './AnimatedDot/index.svelte';
</script>

<main class="layered-animation-root">
    <Controller axis="x" />

    <div class="spacer" />

    <div class="grids">
        <AnimatedDot axis="x" />
        <AnimatedDot />
        <AnimatedDot axis="y" />
    </div>

    <div class="spacer" />

    <Controller axis="y" />
</main>

<style>
    .layered-animation-root {
        padding: 20px;
    }
    .spacer {
        margin-top: 40px;
    }

    .grids {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        gap: 40px;
    }
</style>
