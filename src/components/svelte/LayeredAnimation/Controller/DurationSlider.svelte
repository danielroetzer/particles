<script>
    import { DurationX, DurationY } from '../stores.js';
    import { maxDuration, minDuration } from '../config.js';

    export let axis;

    const Duration = axis === 'x' ? DurationX : DurationY;
</script>

<label for={`range-duration-${axis}`}>Duration:</label>

<input
    id={`range-duration-${axis}`}
    type="range"
    min={minDuration}
    max={maxDuration}
    step="0.1"
    bind:value={$Duration}
/>

<span>{$Duration.toFixed(1)}s</span>
