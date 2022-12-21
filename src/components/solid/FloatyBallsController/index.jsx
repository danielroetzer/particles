import { appendFloatyBall, removeLastFloatyBall } from '@components/solid/FloatyBalls/store';

const FloatyBallsController = function() {
    return (
        <div>
            <button onClick={removeLastFloatyBall}>Remove</button>
            <button onClick={appendFloatyBall}>Add</button>
        </div>
    );
};

export default FloatyBallsController;
