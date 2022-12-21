import { createEffect, Index, onMount } from "solid-js";
import { floatyBalls, setFloatyBalls } from '@components/solid/FloatyBalls/store';

const changeColor = function(itemIndex, newColor) {
    const oldColor = floatyBalls.colors[itemIndex];

    setFloatyBalls('colors', itemIndex, newColor);
    setFloatyBalls('list', item => item.color === oldColor, 'color', newColor);
};

const Color = function(props) {
    createEffect(() => console.log('<Color /> rerender', props.index))

    return (
        <input
            type="color"
            name={`colorpicker-${props.index}`}
            value={props.value}
            onInput={e => changeColor(props.index, e.currentTarget.value)}
        />
    )
};

const ColorPicker = function() {
    return (
        <div>
            {/* With `<Index>` the child elements won't re-rerender, if the color value changes.
                This is required, because rendering closes the native input color picker */}
            <Index each={floatyBalls.colors}>
                {(value, index) => <Color value={value()} index={index} />}
            </Index>
        </div>
    );
};

export default ColorPicker;
