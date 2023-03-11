<script>
    import Controller from './Controller/index.svelte';
    import Blob from './Blob/index.svelte';
</script>

<main>
    <Blob />
    <Controller />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
