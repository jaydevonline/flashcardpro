/* 
Reducers specify how the application's state changes in response to actions sent to the store. 
Remember that actions only describe what happened, but don't describe how the application's state changes.

The reducer is a pure function that takes the previous state and an action, and returns the next state.
*/

function stack( state = {}, action ){
    switch (action.type) {
        case 'SET_STACK':
            return action.stack;
        default:
            return state;
    }
}

export default stack;