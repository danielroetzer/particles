<script>
    import {
        BlobPathTweened,
        Duration,
        LastTweenedBlobPath,
        NexTweenedBlobPath,
    } from '../stores.js';
</script>

<label for="duration-slider">Duration:</label>

<input
    id="duration-slider"
    type="range"
    min="200"
    max="4000"
    step="100"
    bind:value={$Duration}
    on:input={() => BlobPathTweened.set($NexTweenedBlobPath, { duration: 0 })}
    on:change={() => LastTweenedBlobPath.set($NexTweenedBlobPath)}
/>

<span>{($Duration / 1000).toFixed(1)}s</span>
