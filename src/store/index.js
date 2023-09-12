// import { createStore } from 'redux';
//The configureStore function like createStore creates a store, but it makes merging multiple reducers into one reducer easier
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';
import { configureStore } from '@reduxjs/toolkit';


//reducer function without the redux toolkit library
// const counterReducer = (state = initialState, action) => {
//   //you never mutate the existing state, instead always override it by returning a brand new state
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'TOGGLE_COUNTER') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  //Objects map of reducers, these reducers will be marge to gather into one main reducer
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});


export default store;
