<script>
    import { setNextBlobPath } from '../Blob/helpers';
    import { Complexity, PointCount } from '../stores.js';
</script>

<label for="complexity-slider">Complexity:</label>

<input
    id="complexity-slider"
    type="range"
    min="1"
    max="10"
    step="1"
    bind:value={$Complexity}
    on:input={function (event) {
        setNextBlobPath({
            pointCount: $PointCount,
            complexity: parseInt(event.target.value),
            duration: 0,
        });
    }}
/>

<span>{$Complexity}</span>
