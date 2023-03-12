import { Portal } from 'solid-js/web';
import { batch, createEffect, For, onMount, untrack } from 'solid-js';
import FloatyBallsController from '@components/solid/FloatyBallsController';
import styles from './styles.module.css';

import {
    floatyBalls,
    initRandomColors,
    populateFloatyBalls,
    setFloatyBalls,
} from './store';

const convertToStyle = function (props) {
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

    // Cancel any already existing animation, before adding a new one.
    // This should only run, when the animation signals update, so we untrack any other signals.
    createEffect(function () {
        untrack(() =>
            floatyBalls.list[props.index].animation.subscription?.cancel()
        );

        const animation = ballRef.animate(
            props.item.animation.keyframes,
            props.item.animation.options
        );

        setFloatyBalls(
            'list',
            untrack(() => props.index),
            'animation',
            'subscription',
            animation
        );
    });

    return (
        <div
            class={styles.floatyball}
            style={convertToStyle(props.item)}
            ref={ballRef}
        >
            {floatyBalls.showParticleIndex ? props.index : null}
        </div>
    );
};

function FloatyBalls() {
    onMount(function () {
        batch(function () {
            initRandomColors();
            populateFloatyBalls();
        });
    });

    return (
        <>
            <Portal>
                <div class={styles.root}>
                    <For each={floatyBalls.list}>
                        {(item, index) => (
                            <FloatyBall index={index()} item={item} />
                        )}
                    </For>
                </div>
            </Portal>

            <FloatyBallsController />
        </>
    );
}

export default FloatyBalls;
