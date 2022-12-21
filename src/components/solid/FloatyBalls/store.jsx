import { createStore } from 'solid-js/store';
import { randomInt } from '@utils/math';

export const [floatyBalls, setFloatyBalls] = createStore({
    colors: [
        '#387ce5',
        '#4b38e5',
        '#a138e5',
        '#e538d3',
        '#e5387c',
        '#e54b38',
    ],
    list: [],
});

const calcFloatyBallProps = function({ index }) {
    const translateTo = {
        x: randomInt(0, index % 2 === 0 ? -12 : 12),
        y: randomInt(0, 12),
    };

    const keyframes = [
        { transform: "translate(0, 0)" },
        { transform: `translate(${translateTo.x}rem, ${translateTo.y}rem)` },
    ];

    const options = {
        duration: randomInt(1000, 3000),
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out',
        fill: 'both',
    }

    return {
        color: floatyBalls.colors[randomInt(0, floatyBalls.colors.length - 1)],
        size: randomInt(1, 6),
        x: randomInt(0, 100),
        y: randomInt(0, 100),
        animation: {
            keyframes,
            options,
        },
    };
}

export const populateFloatyBalls = function(props) {
    return setFloatyBalls(function(prev) {
        const items = Array
            .from(
                { length: props.count ?? 10 },
                (_, index) => calcFloatyBallProps({ index })
            );

        return { list: items };
    });
};

export const appendFloatyBall = function() {
    return setFloatyBalls('list', prev => [...prev, calcFloatyBallProps({ index: prev.length, })])
};

export const removeLastFloatyBall = function() {
    return setFloatyBalls('list', prev => prev.slice(0, prev.length - 1));
};

export const clearFloatyBalls = function() {
    return setFloatyBalls('list', []);
};
