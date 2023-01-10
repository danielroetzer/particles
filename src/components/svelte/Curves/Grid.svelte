<script>
    export const size = 100;

    const rows = Array.from({ length: 4 }, (_, index) => index + 1);
    const columns = rows;

    const cellSize = size / 5;

    const calcPosition = factor => `${factor * cellSize}px`;
</script>

<div class="root" style:--size={`${size}px`}>
    {#each columns as columnCount}
        <div class="column" style:left={calcPosition(columnCount)} />
    {/each}
    {#each rows as rowCount}
        <div class="row" style:top={calcPosition(rowCount)} />
    {/each}
    <slot />
</div>

<style>
    .root {
        position: relative;
        height: var(--size);
        width: var(--size);

        background-color: white;

        border: 1px solid gray;
    }

    .column,
    .row {
        background-color: gray;
        position: absolute;
    }

    .column {
        height: 100%;
        width: 1px;
    }

    .row {
        height: 1px;
        width: 100%;
    }
</style>
