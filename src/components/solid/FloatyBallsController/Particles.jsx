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
        <>
            <div class="flexrow">
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
                <span>{floatyBalls.size.min.toFixed(1)}rem</span>
            </div>

            <div class="flexrow">
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
                <span>{floatyBalls.size.max.toFixed(1)}rem</span>
            </div>
        </>
    )
};

const Particles = function() {
    return (
        <>
            <div class="flexrow">
                <button onClick={appendFloatyBall}>Add 1</button>
                <button onClick={removeLastFloatyBall} disabled={floatyBalls.listCount === 0}>Remove 1</button>
                <button onClick={clearFloatyBalls}>Remove all</button>
            </div>

            <Sizes />

            <div class="flexrow">
                <input
                    type="checkbox"
                    id="particle-index"
                    name="particle-index"
                    value="index"
                    checked={floatyBalls.showParticleIndex}
                    onChange={toggleParticleIndex}
                />
                <label for="particle-index" class="pointer">Show particle index</label>
            </div>
        </>
    );
};

export default Particles;
