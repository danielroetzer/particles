import { createStore } from 'solid-js/store';
import { roundedRandom } from '@utils/math';

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
        x: roundedRandom(index % 2 === 0 ? -12 : 12),
        y: roundedRandom(12),
    };

    const keyframes = [
        { transform: "translate(0, 0)" },
        { transform: `translate(${translateTo.x}rem, ${translateTo.y}rem)` },
    ];

    const options = {
        duration: (Math.random() + 1) * 2000,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out',
        fill: 'both',
    }

    return {
        color: floatyBalls.colors[roundedRandom(floatyBalls.colors.length)],
        size: roundedRandom(4),
        x: roundedRandom(100),
        y: roundedRandom(100),
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

        console.log(items);

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
