import { batch, For } from 'solid-js';
import { easings } from '@utils/animation';
import {
    floatyBalls,
    setFloatyBalls,
} from '@components/solid/FloatyBalls/store';

const changeEasing = function (newValue) {
    batch(function () {
        setFloatyBalls('easing', newValue);
        setFloatyBalls('list', {}, 'animation', 'options', 'easing', newValue);
    });
};

const Easing = function (props) {
    return (
        <div class="flexrow">
            <input
                type="radio"
                name="easing"
                value={props.value}
                id={`radio-${props.value}`}
                checked={floatyBalls.easing === props.value}
                onClick={e => changeEasing(e.currentTarget.value)}
            />
            <label for={`radio-${props.value}`} class="pointer">
                {props.value}
            </label>
        </div>
    );
};

const EasingPicker = function () {
    return (
        <>
            <For each={easings}>{value => <Easing value={value} />}</For>
        </>
    );
};

export default EasingPicker;
