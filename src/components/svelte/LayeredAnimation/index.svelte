<script>
    import Controller from './Controller/index.svelte';
    import AnimatedDot from './AnimatedDot/index.svelte';
    import { randomize } from './stores';
</script>

<main>
    <Controller axis="x" />

    <div class="spacer" />

    <div class="grids">
        <AnimatedDot axis="x" />
        <AnimatedDot />
        <AnimatedDot axis="y" />
    </div>

    <div class="spacer" style:--size="20px" />

    <div class="randomize">
        <button on:click={randomize}>randomize options</button>
    </div>

    <div class="spacer" />

    <Controller axis="y" />
</main>

<style>
    main {
        padding: 20px;
    }

    .spacer {
        margin-top: var(--size, 40px);
    }

    .grids {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        gap: 40px;
    }

    .randomize {
        display: flex;
        justify-content: center;
    }
</style>
