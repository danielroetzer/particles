import { createEffect, For, onMount } from "solid-js";
import { floatyBalls, populateFloatyBalls } from "./store";
import './styles.css';


const convertToStyle = function(props) {
    return `
        top: ${props.y}vh;
        left: ${props.x}vw;
        background-color: ${props.color};
        height: ${props.size}rem;
        width: ${props.size}rem;
    `;
};

const FloatyBall = function (props) {
    let ballRef;

    createEffect(() => console.log('<FloatyBall /> rerendered:', props.index, props.item));
    onMount(() => ballRef.animate(props.item.animation.keyframes, props.item.animation.options));

    return (
        <div class="floatyball" style={convertToStyle(props.item)} ref={ballRef}>
            {props.index}
        </div>
    );
};

function FloatyBalls() {
    onMount(() => populateFloatyBalls({ count: 100 }));

    return (
        <div class="root">
            <For each={floatyBalls.list}>
                {(item, index) => <FloatyBall
                    index={index()}
                    item={item}
                />}
            </For>
        </div>
    );
}

export default FloatyBalls;
