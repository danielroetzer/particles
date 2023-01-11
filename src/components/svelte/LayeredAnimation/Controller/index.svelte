<script>
    import {
        initialEasing,
        DurationX,
        DurationY,
        EasingX,
        EasingY,
    } from '@components/svelte/LayeredAnimation/AnimatedDot/stores';

    import { easings, customEasings } from '@utils/animation';

    export let axis;

    const Duration = axis === 'x' ? DurationX : DurationY;
    const Easing = axis === 'x' ? EasingX : EasingY;
</script>

<div class="root">
    <h2>{axis} axis options</h2>

    <div>
        <label for={`select-easing-${axis}`}>Easing:</label>
        <select id={`select-easing-${axis}`} bind:value={$Easing}>
            <optgroup label="Native">
                {#each easings as easing}
                    <option
                        value={easing}
                        selected={easing === initialEasing[axis]}
                    >
                        {easing}
                    </option>
                {/each}
            </optgroup>

            <optgroup label="Custom">
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
    </div>

    <div>
        <label for={`range-duration-${axis}`}>Duration:</label>
        <input
            id={`range-duration-${axis}`}
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            bind:value={$Duration}
        />
        <span>{$Duration.toFixed(1)}s</span>
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
