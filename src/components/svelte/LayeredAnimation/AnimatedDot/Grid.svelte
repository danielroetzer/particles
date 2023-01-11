<script>
    export let size;

    const rows = Array.from({ length: 4 }, (_, index) => index + 1);
    const columns = rows;

    const cellSize = size / 5;

    const calcPosition = factor => `${factor * cellSize}px`;
</script>

<!-- The inner grid lines could be replaced by setting linear gradients on the background -->
{#each columns as columnCount}
    <div class="column" style:left={calcPosition(columnCount)} />
{/each}
{#each rows as rowCount}
    <div class="row" style:top={calcPosition(rowCount)} />
{/each}

<style>
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
