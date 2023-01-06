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

const millisecondsToSeconds = ms => (ms / 1000).toFixed(1);

const DurationSlider = function() {
    return (
        <>
            <div class="flexrow">
                <label for="duration-min">Minimum duration</label>
                <input
                    type="range"
                    id="duration-min"
                    name="duration-min"
                    min="200"
                    step="100"
                    max={floatyBalls.duration.max}
                    value={floatyBalls.duration.min}
                    onInput={e => changeMinDuration(e.currentTarget.value)}
                />
                <span>{millisecondsToSeconds(floatyBalls.duration.min)}s</span>
            </div>

            <div class="flexrow">
                <label for="duration-max">Maximum duration:</label>
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
                <span>{millisecondsToSeconds(floatyBalls.duration.max)}s</span>
            </div>
        </>
    )
};

const PausePlayButton = function() {
    const onClickProxy = e => floatyBalls.areAnimationsPaused
        ? playAnimations(e)
        : pauseAnimations(e);

    return (
        <div class="flexrow">
            <button onClick={onClickProxy}>
                {floatyBalls.areAnimationsPaused ? 'Play' : 'Pause'}
            </button>
        </div>
    );
};

const Animation = function() {
    return (
        <>
            <PausePlayButton />
            <DurationSlider />
        </>
    );
};

export default Animation;
