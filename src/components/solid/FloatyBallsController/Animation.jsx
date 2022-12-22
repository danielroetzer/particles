import { batch } from "solid-js";
import { floatyBalls, pauseAnimations, playAnimations, setFloatyBalls } from '@components/solid/FloatyBalls/store';


const changeMinDuration = function(newValue) {
    const parsedValue = parseFloat(newValue);

    batch(function() {
        setFloatyBalls('duration', 'min', parsedValue);

        setFloatyBalls(
            'list',
            item => item.animation.options.duration < parsedValue,
            'animation',
            'options',
            'duration',
            parsedValue
        );
    });
};

const changeMaxDuration = function(newValue) {
    const parsedValue = parseFloat(newValue);

    batch(function() {
        setFloatyBalls('duration', 'max', parsedValue);

        setFloatyBalls(
            'list',
            item => item.animation.options.duration > parsedValue,
            'animation',
            'options',
            'duration',
            parsedValue
        );
    });
};

const DurationSlider = function() {
    return (
        <div class="duration">
            <label for="duration-min">Minimum duration (in milliseconds):</label>
            <input
                type="range"
                id="duration-min"
                name="duration-min"
                min="100"
                step="100"
                max={floatyBalls.duration.max}
                value={floatyBalls.duration.min}
                onInput={e => changeMinDuration(e.currentTarget.value)}
            />
            <span>{floatyBalls.duration.min}</span>
            <br />

            <label for="duration-max">Maximum duration (in milliseconds):</label>
            <input
                type="range"
                id="duration-max"
                name="duration-max"
                min={floatyBalls.duration.min}
                step="100"
                max="5000"
                value={floatyBalls.duration.max}
                onInput={e => changeMaxDuration(e.currentTarget.value)}
            />
            <span>{floatyBalls.duration.max}</span>
        </div>
    )
};

const Animation = function() {
    return (
        <div>
            <button onClick={pauseAnimations}>Pause</button>
            <button onClick={playAnimations}>Play</button>
            <br />

            <DurationSlider />
        </div>
    );
};

export default Animation;
