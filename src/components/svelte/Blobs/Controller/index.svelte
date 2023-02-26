<script>
    import DurationSlider from './DurationSlider.svelte';
    import FillCheckbox from './FillCheckbox.svelte';
</script>

<div class="root">
    <div class="controller">
        <DurationSlider />
    </div>

    <div class="controller">
        <FillCheckbox />
    </div>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .controller {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
</style>
