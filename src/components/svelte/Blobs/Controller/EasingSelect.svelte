<script>
    import * as easings from 'svelte/easing';

    import {
        Easing,
        LastTweenedBlobPath,
        NextTweenedBlobPath,
    } from '../stores';

    const easingList = Object.keys(easings);

    const setEasing = function (event) {
        Easing.set(event.target.value);
        LastTweenedBlobPath.set($NextTweenedBlobPath);
    };
</script>

<label for="easing-select">Easing:</label>

<select id="easing-select" on:change={setEasing}>
    {#each easingList as easing}
        <option value={easing} selected={easing === $Easing}>
            {easing}
        </option>
    {/each}
</select>

<style>
    select {
        padding: 5px;
        border-radius: 4px;
    }
</style>
