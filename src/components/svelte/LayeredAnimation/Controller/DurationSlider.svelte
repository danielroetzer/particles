<script>
    import { DurationX, DurationY } from '../stores.js';

    export let axis;

    const Duration = axis === 'x' ? DurationX : DurationY;
</script>

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
