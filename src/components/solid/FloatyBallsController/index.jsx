import { floatyBalls } from '@components/solid/FloatyBalls/store';
import Animation from './Animation';
import ColorPicker from './ColorPicker';
import EasingPicker from './EasingPicker';
import Particles from './Particles';

const FloatyBallsController = function() {
    return (
        <div>
            {/* todo: Find out why the initial population is not tracked */}
            <h2>Particles ({floatyBalls.listCount})</h2>
            <Particles />

            <h2>Colors ({floatyBalls.colorCount})</h2>
            <ColorPicker />

            <h2>Animation</h2>
            <Animation />

            <h2>Easing</h2>
            <EasingPicker />
        </div>
    );
};

export default FloatyBallsController;
