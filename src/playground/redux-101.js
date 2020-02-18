import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
})
const resetCount = () => ({
        type: 'RESET',
})
const setCount = ({ count }) => ({
        type: 'SET',
        count
})


//Reducers
// 1. Reducers are pure funcitons
// 2. Never change state or action

const countReducer = (state = {count:0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":   
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":   
            return {
                count: 0
            }
        case "SET":   
            return {
                count: action.count
            }
            default:
                return state;
    }

    console.log('running');

}
// Create store

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//Actions - object that gets sent to the store

// walk, stop, work, stop-working

// + increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(resetCount())
store.dispatch(setCount({count:101}))

// unsubscribe();

// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'DECREMENT'
// });
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy : 10
// });

// store.dispatch({
//     type: 'SET',
//     count:10
// })


// - decrement

// dispatching actions
