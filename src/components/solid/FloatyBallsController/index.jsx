import { appendFloatyBall, clearFloatyBalls, removeLastFloatyBall } from '@components/solid/FloatyBalls/store';
import ColorPicker from './ColorPicker';

const FloatyBallsController = function() {
    return (
        <>
            <h2>Particles</h2>
            <div>
                <button onClick={removeLastFloatyBall}>Remove</button>
                <button onClick={appendFloatyBall}>Add</button>
                <button onClick={clearFloatyBalls}>Clear</button>
            </div>
            <h2>Colors</h2>
            <ColorPicker />
        </>
    );
};

export default FloatyBallsController;
