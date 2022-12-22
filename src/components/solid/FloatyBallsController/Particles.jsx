import { batch } from "solid-js";
import { appendFloatyBall, clearFloatyBalls, removeLastFloatyBall, floatyBalls, setFloatyBalls } from '@components/solid/FloatyBalls/store';


const changeMinSize = function(newValue) {
    const parsedValue = parseFloat(newValue);

    batch(function() {
        setFloatyBalls('size', 'min', parsedValue);
        setFloatyBalls('list', item => item.size < parsedValue, 'size', parsedValue);
    });
};

const changeMaxSize = function(newValue) {
    const parsedValue = parseFloat(newValue);

    batch(function() {
        setFloatyBalls('size', 'max', parsedValue);
        setFloatyBalls('list', item => item.size > parsedValue, 'size', parsedValue);
    });
};

const toggleParticleIndex = () => setFloatyBalls('showParticleIndex', prev => !prev);

const Sizes = function() {
    return (
        <div class="sizes">
            <label for="size-min">Minimum size:</label>
            <input
                type="range"
                id="size-min"
                name="size-min"
                min="0.5"
                step="0.1"
                max={floatyBalls.size.max}
                value={floatyBalls.size.min}
                onInput={e => changeMinSize(e.currentTarget.value)}
            />
            <span>{floatyBalls.size.min.toFixed(1)}</span>
            <br />

            <label for="size-max">Maximum size:</label>
            <input
                type="range"
                id="size-max"
                name="size-max"
                min={floatyBalls.size.min}
                step="0.1"
                max="12"
                value={floatyBalls.size.max}
                onInput={e => changeMaxSize(e.currentTarget.value)}
            />
            <span>{floatyBalls.size.max.toFixed(1)}</span>
        </div>
    )
};

const Particles = function() {
    return (
        <div>
            <button onClick={removeLastFloatyBall}>Remove</button>
            <button onClick={appendFloatyBall}>Add</button>
            <button onClick={clearFloatyBalls}>Clear</button>
            <br />

            <Sizes />

            <div>
                <input
                    type="checkbox"
                    id="particle-index"
                    name="particle-index"
                    value="index"
                    checked={floatyBalls.showParticleIndex}
                    onChange={toggleParticleIndex}
                />
                <label for="particle-index">Show particle index</label>
            </div>
        </div>
    );
};

export default Particles;
