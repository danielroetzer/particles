import { batch, For } from "solid-js";
import { floatyBalls, setFloatyBalls } from "@components/solid/FloatyBalls/store";

const easings = [
    'ease',
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
];

const changeEasing = function(newValue) {
    batch(function() {
        setFloatyBalls('easing', newValue);
        setFloatyBalls('list', {}, 'animation', 'options', 'easing', newValue);
    });
};

const Easing = function(props) {
    return (
        <div>
            <input
                type="radio"
                name="easing"
                value={props.value}
                id={`radio-${props.value}`}
                checked={floatyBalls.easing === props.value}
                onClick={e => changeEasing(e.currentTarget.value)}
            />
            <label for={`radio-${props.value}`}>{props.value}</label>
        </div>
    )
};

const EasingPicker = function() {
    return (
        <div>
            <For each={easings}>
                {value => <Easing value={value} />}
            </For>
        </div>
    );
};

export default EasingPicker;
