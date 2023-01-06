import { createStore } from 'solid-js/store';
import { isServer } from "solid-js/web";
import { randomFloat, randomHexColor, randomInt } from '@utils/math';

export const [floatyBalls, setFloatyBalls] = createStore({
    colors: [],
    easing: 'ease-in-out',
    size: {
        min: 0.5,
        max: 5,
    },
    duration: {
        min: 1000,
        max: 3000,
    },
    list: [],
    showParticleIndex: false,
    areAnimationsPaused: false,
    get colorCount() {
        return this.colors.length;
    },
    get listCount() {
        return this.list.length;
    },
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
        duration: randomInt(floatyBalls.duration.min, floatyBalls.duration.max),
        direction: 'alternate',
        iterations: Infinity,
        easing: floatyBalls.easing,
        fill: 'both',
    }

    return {
        color: floatyBalls.colors[randomInt(0, floatyBalls.colors.length - 1)],
        size: randomFloat(floatyBalls.size.min, floatyBalls.size.max),
        x: randomInt(0, 100),
        y: randomInt(0, 100),
        animation: {
            keyframes,
            options,
            subscription: null,
        },
    };
}

export const initRandomColors = function(props = {}) {
    const colors = Array.from(
        { length: props.count ?? 5 },
        () => randomHexColor()
    );

    return setFloatyBalls('colors', colors);
};

export const populateFloatyBalls = function(props = {}) {
    const population = Array.from(
        { length: props.count ?? 150 },
        (_, index) => calcFloatyBallProps({ index })
    );

    return setFloatyBalls('list', population);
};

export const pauseAnimations = function() {
    floatyBalls.list.forEach(function(item) {
        if (item.animation.subscription.playState === 'paused') return;

        item.animation.subscription.pause();
    });

    setFloatyBalls('areAnimationsPaused', true);
};

export const playAnimations = function() {
    floatyBalls.list.forEach(function(item) {
        if (item.animation.subscription.playState === 'running') return;

        item.animation.subscription.play();
    });

    setFloatyBalls('areAnimationsPaused', false);
};

export const appendFloatyBall = function() {
    return setFloatyBalls('list', prev => [...prev, calcFloatyBallProps({ index: prev.length, })])
};

export const removeLastFloatyBall = function() {
    if (floatyBalls.listCount === 0) return;

    return setFloatyBalls('list', prev => prev.slice(0, prev.length - 1));
};

export const clearFloatyBalls = function() {
    return setFloatyBalls('list', []);
};
