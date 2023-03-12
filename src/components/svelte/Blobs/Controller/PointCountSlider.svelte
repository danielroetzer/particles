<script>
    import { setNextBlobPath } from '../Blob/helpers';
    import { Complexity, PointCount } from '../stores.js';
</script>

<label for="point-count-slider">Point count:</label>

<input
    id="point-count-slider"
    type="range"
    min="3"
    max="20"
    step="1"
    bind:value={$PointCount}
    on:input={function (event) {
        setNextBlobPath({
            pointCount: parseInt(event.target.value),
            complexity: $Complexity,
            duration: 0,
        });
    }}
/>

<span>{$PointCount}</span>
