<script>
    import { setNextBlobPath, setNextHue } from '../Blob/helpers';
    import {
        Complexity,
        Duration,
        PointCount,
        LastHue,
        Easing,
    } from '../stores.js';
</script>

<label for="duration-slider">Duration:</label>

<input
    id="duration-slider"
    type="range"
    min="100"
    max="5000"
    step="100"
    bind:value={$Duration}
    on:input={function (event) {
        setNextBlobPath({
            pointCount: $PointCount,
            complexity: $Complexity,
            duration: parseInt(event.target.value),
            easing: $Easing,
        });

        setNextHue({
            lastHue: $LastHue,
            duration: parseInt(event.target.value),
        });
    }}
/>

<span>{($Duration / 1000).toFixed(1)}s</span>
