<script>
    import { onMount } from 'svelte';
    import { randomInt, randomNegativeOrPositive } from '@utils/math';
    import { removeIndex } from '@utils/array';

    let source;
    let lightItems = [];

    onMount(function () {
        console.log(source);
    });

    const addLight = function () {
        lightItems = lightItems.concat(Date.now());
    };

    const removeLight = function (lightItem) {
        lightItems = lightItems.filter(item => item !== lightItem);

        console.log('removing light:', lightItem);
    };

    const calcAngle = (x, y) => (Math.atan2(y, x) * 180) / Math.PI;

    const light = function (node, { duration }) {
        const sourceRect = source.getBoundingClientRect();
        const lightRect = node.getBoundingClientRect();

        // const y = randomInt(0, 110) * randomNegativeOrPositive();
        // const x = randomInt(0, 110) * randomNegativeOrPositive();
        // const deltaY = lightRect.bottom - lightRect.top;
        // const deltaX = lightRect.right - lightRect.left;
        // const angle

        // transform: translate(0, -${sourceRect.top * t}px);
        const y = randomInt(0, 110) * randomNegativeOrPositive();
        const x = randomInt(0, 110) * randomNegativeOrPositive();
        // const angle = x === 0 || y === 0 ? 0 : calcAngle(x, y);

        // console.log(angle);

        return {
            duration: 1000,
            css(t) {
                return `
                    transform: translate(${x * t}vh, ${y * t}vh);
                `;
            },
            // css: t => {
            // 	const eased = elasticOut(t);

            // 	return `
            // 		transform: scale(${eased}) rotate(${eased * 1080}deg);
            // 		color: hsl(
            // 			${Math.trunc(t * 360)},
            // 			${Math.min(100, 1000 - 1000 * t)}%,
            // 			${Math.min(50, 500 - 500 * t)}%
            // 		);`
            // }
        };
    };
</script>

<div class="root">
    <div class="source" bind:this={source} on:click={addLight}>
        {#each lightItems as lightItem}
            <div
                class="light"
                in:light
                on:introend={event => removeLight(lightItem)}
            />
        {/each}
    </div>
</div>

<style>
    .root {
        position: absolute;
        inset: 0;
        z-index: -1;
        padding: 20px;

        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .source {
        height: 20px;
        width: 20px;
        background-color: red;
    }

    .light {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 10px;

        background-color: black;
    }
</style>
