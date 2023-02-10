<script>
    import EasingSelect from './EasingSelect.svelte';
    import DurationSlider from './DurationSlider.svelte';

    export let axis;
</script>

<div class="root">
    <h2>{axis} axis options</h2>

    <div class="controller">
        <EasingSelect {axis} />
    </div>

    <div class="controller">
        <DurationSlider {axis} />
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

    h2 {
        margin-top: 0;
        margin-bottom: 5px;
    }
</style>
