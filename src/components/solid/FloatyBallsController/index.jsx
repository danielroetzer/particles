import { floatyBalls } from '@components/solid/FloatyBalls/store';
import Animation from './Animation';
import ColorPicker from './ColorPicker';
import EasingPicker from './EasingPicker';
import Particles from './Particles';
import styles from './index.module.css';
import { createSignal, Show } from 'solid-js';

const FloatyBallsController = function () {
    const [show, setShow] = createSignal(true);

    return (
        <div class={styles.root}>
            <div>
                <button onClick={() => setShow(prev => !prev)}>
                    {show() ? 'Hide' : 'Show'} controlls
                </button>
            </div>

            <Show when={show()}>
                <div class={styles.controller}>
                    <h2 class={styles.header}>
                        Particles ({floatyBalls.listCount})
                    </h2>
                    <Particles />
                </div>

                <div class={styles.controller}>
                    <h2 class={styles.header}>
                        Colors ({floatyBalls.colorCount})
                    </h2>
                    <ColorPicker />
                </div>

                <div class={styles.controller}>
                    <h2 class={styles.header}>Animation</h2>
                    <Animation />
                </div>

                <div class={styles.controller}>
                    <h2 class={styles.header}>Easing</h2>
                    <EasingPicker />
                </div>
            </Show>
        </div>
    );
};

export default FloatyBallsController;
