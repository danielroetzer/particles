<script>
    import {
        initialEasing,
        DurationX,
        DurationY,
        EasingX,
        EasingY,
    } from './stores';

    import { easings, customEasings } from '@utils/animation';

    export let axis;

    const Duration = axis === 'x' ? DurationX : DurationY;
    const Easing = axis === 'x' ? EasingX : EasingY;
</script>

<div class="root">
    <label for={`select-easing-${axis}`}>Easing {axis.toUpperCase()}:</label>
    <select id={`select-easing-${axis}`} bind:value={$Easing}>
        <optgroup label="Predefined easings">
            {#each easings as easing}
                <option
                    value={easing}
                    selected={easing === initialEasing[axis]}
                >
                    {easing}
                </option>
            {/each}
        </optgroup>

        <optgroup label="Custom bezier easings">
            {#each Object.keys(customEasings) as id}
                <option
                    value={customEasings[id]}
                    selected={customEasings[id] === initialEasing}
                >
                    {id}
                </option>
            {/each}
        </optgroup>
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
