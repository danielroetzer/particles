import { createEffect, For, onMount } from "solid-js";
import { floatyBalls } from "./store";
import './styles.css';


const roundedRandom = factor => Math.max(1, Math.floor(Math.random() * factor));

const calculateStyle = function() {
    const size = roundedRandom(4);
    const color = floatyBalls.colors[roundedRandom(floatyBalls.colors.length)]

    return `
        top: ${roundedRandom(100)}vh;
        left: ${roundedRandom(100)}vw;
        background-color: ${color};
        height: ${size}rem;
        width: ${size}rem;
    `;
};

const FloatyBall = function (props) {
    const translateTo = {
        x: roundedRandom(props.index % 2 === 0 ? -12 : 12),
        y: roundedRandom(12),
    };

    const ballAnimationKeyframes = [
        { transform: "translate(0, 0)" },
        { transform: `translate(${translateTo.x}rem, ${translateTo.y}rem)` },
    ];

    const ballAnimationOptions = {
        duration: 2000,
        direction: "alternate",
        iterations: Infinity,
        easing: "ease-in-out",
        fill: "both",
    };

    let ballRef;

    onMount(() => ballRef.animate(ballAnimationKeyframes, ballAnimationOptions));

    createEffect(() => console.log('<FloatyBall /> rerendered:', props.index));

    return (
        <div class="floatyball" style={calculateStyle()} ref={ballRef}>
            {props.index}
        </div>
    );
};

function FloatyBalls(props) {
    let rootRef;

    createEffect(() => console.log('rootRef', rootRef));

    return (
        <div class="root" ref={rootRef}>
            <For each={floatyBalls.list}>
                {(item, index) => <FloatyBall
                    index={index()}
                />}
            </For>
        </div>
    );
}

export default FloatyBalls;
