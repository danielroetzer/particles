import { batch, Index } from "solid-js";
import { floatyBalls, setFloatyBalls } from '@components/solid/FloatyBalls/store';
import { removeIndex } from "@utils/array";
import { randomInt } from "@utils/math";

const changeColor = function(itemIndex, newColor) {
    const oldColor = floatyBalls.colors[itemIndex];

    batch(function() {
        setFloatyBalls('colors', itemIndex, newColor);
        setFloatyBalls('list', item => item.color === oldColor, 'color', newColor);
    });
};

const deleteColor = function(itemIndex) {
    const oldColor = floatyBalls.colors[itemIndex];

    batch(function() {
        setFloatyBalls('colors', colors => removeIndex(colors, itemIndex));
        setFloatyBalls('list', item => item.color === oldColor, 'color', () => floatyBalls.colors[randomInt(0, floatyBalls.colors.length - 1)]);
    });
};

const addColor = () => setFloatyBalls('colors', floatyBalls.colors.length, '#eeeeee');

const Color = function(props) {
    return (
        <div>
            <input
                type="color"
                name={`colorpicker-${props.index}`}
                value={props.value}
                onInput={e => changeColor(props.index, e.currentTarget.value)}
            />
            <button disabled={floatyBalls.colors.length <= 1} onClick={() => deleteColor(props.index)}>Delete</button>
        </div>
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
            <button onClick={addColor}>New</button>
        </div>
    );
};

export default ColorPicker;
