<script>
    import { initialEasing, EasingX, EasingY } from '../stores.js';

    import { easings, customEasings } from '@utils/animation';

    export let axis;

    const Easing = axis === 'x' ? EasingX : EasingY;
</script>

<label for={`select-easing-${axis}`}>Easing:</label>

<select id={`select-easing-${axis}`} bind:value={$Easing}>
    <optgroup label="Native">
        {#each easings as easing}
            <option value={easing} selected={easing === initialEasing[axis]}>
                {easing}
            </option>
        {/each}
    </optgroup>

    <optgroup label="Custom">
        {#each Object.keys(customEasings) as id}
            <option
                value={customEasings[id]}
                selected={customEasings[id] === initialEasing[axis]}
            >
                {id}
            </option>
        {/each}
    </optgroup>
</select>

<style>
    select {
        padding: 5px;

        border-radius: 4px;
    }
</style>
