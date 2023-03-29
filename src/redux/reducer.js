const count = {
    counter: 0
}
export function reducer(state = count, action){
    if (action.type === 'PLUS_COUNTER'){
        return {...state, counter: state.counter + 1}
    } 
    else if (action.type === 'MINUS_COUNTER'){
        return {...state, counter: state.counter - 1}
    }

    return state
}