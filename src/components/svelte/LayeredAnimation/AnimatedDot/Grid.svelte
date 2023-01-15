<script>
    export let size;
    export let cellsPerLine;

    const cells = Array.from({ length: cellsPerLine * cellsPerLine });
</script>

<!--
    To avoid creating so many empty <div /> elements, we could use linear gradients on the background.
    However, the CSS grid guarantees us perfect equally sized cells.
-->
<div
    class="grid"
    style:--size={`${size}px`}
    style:--cellsPerLine={cellsPerLine}
>
    {#each cells as _}
        <div />
    {/each}
</div>

<style>
    .grid {
        position: relative;

        width: var(--size);
        height: var(--size);
        display: grid;
        grid-template-columns: repeat(var(--cellsPerLine), 1fr);
        grid-template-rows: repeat(var(--cellsPerLine), 1fr);
        gap: 1px;

        border: 1px solid #777777;
        background-color: #777777;
    }

    .grid > * {
        background-color: white;
    }
</style>
