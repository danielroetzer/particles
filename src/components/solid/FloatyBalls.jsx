import { For, onMount } from "solid-js";
import './FloatyBalls.css';


const roundedRandom = factor => Math.floor(Math.random() * factor);

const colors = ['goldenrod', 'red', 'green', 'lightgray', 'blue', 'orange'];

const calculateStyle = function() {
    const size = roundedRandom(4);

    return `
        top: ${roundedRandom(100)}vh;
        left: ${roundedRandom(100)}vw;
        background-color: ${colors[roundedRandom(colors.length)]};
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

    return <div class="floatyball" style={calculateStyle()} ref={ballRef} />;
};

function FloatyBalls(props) {
    return (
        <>
            <For each={Array.from(Array(100))}>
                {(item, index) => <FloatyBall
                    index={index}
                />}
            </For>
        </>
    );
}

export default FloatyBalls;
