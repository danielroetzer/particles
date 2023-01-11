<script>
    import {
        initialEasing,
        DurationX,
        DurationY,
        EasingX,
        EasingY,
    } from './stores';

    import { easings } from '@utils/animation';

    export let axis;

    const Duration = axis === 'x' ? DurationX : DurationY;
    const Easing = axis === 'x' ? EasingX : EasingY;

    // $: console.log(axis, ':', $Duration);
    // $: console.log(axis, ':', $Easing);
</script>

<div class="root">
    <label for={`select-easing--${axis}`}>Easing {axis.toUpperCase()}:</label>
    <select id={`select-easing-${axis}`} bind:value={$Easing}>
        {#each easings as easing}
            <option value={easing} selected={easing === initialEasing[axis]}>
                {easing}
            </option>
        {/each}
    </select>

    <label for={`range-duration-${axis}`}>Duration:</label>
    <input
        id={`range-duration-${axis}`}
        type="range"
        min="1"
        max="10"
        bind:value={$Duration}
    />
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
    }
</style>
