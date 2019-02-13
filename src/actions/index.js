/* 
    Actions are plain JavaScript objects. 
    Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. 

    Action creators are exactly that—functions that create actions. 
*/


//action creator function
export function setStack(stack) {
    return {
        type: 'SET_STACK',
        stack: stack 
    }
}

