import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  //When we use useSelector react-redux will automatically setup subscription to the redux store for this component, So our component will be updated and receive the latest state whenever that data changes
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch(); //give us a dispatch function which we can execute

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' }); //we are sending an object to the reducer with action type and payload
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'INCREASE', amount: 5 });
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const toggleCounterHandler = () => {
    // dispatch({
    //   type: 'TOGGLE_COUNTER',
    // });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increaseHandler}>INCREASE 5</button>
        <button onClick={incrementHandler}>INCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
