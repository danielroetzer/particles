<script>
    import EasingSelect from './EasingSelect.svelte';
    import DurationSlider from './DurationSlider.svelte';

    export let axis;
</script>

<div class="root">
    <h2>{axis} axis options</h2>

    <div>
        <EasingSelect {axis} />
    </div>

    <div>
        <DurationSlider {axis} />
    </div>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 8px;
    }
</style>
