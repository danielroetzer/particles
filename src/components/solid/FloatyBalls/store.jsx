import { createStore } from 'solid-js/store';

// todo: create `init` function that calculates everything for each floaty ball.
// This will allow me to configure styles, animations etc. from a separate component (e.g. FloatyBalls Controller)
export const [floatyBalls, setFloatyBalls] = createStore({
    colors: [
        '#387ce5',
        '#4b38e5',
        '#a138e5',
        '#e538d3',
        '#e5387c',
        '#e54b38',
    ],
    list: Array.from(Array(10)),
});

export const appendFloatyBall = function() {
    return setFloatyBalls('list', prev => [...prev, undefined])
};

export const removeLastFloatyBall = function() {
    return setFloatyBalls('list', prev => prev.slice(0, prev.length - 1));
};


