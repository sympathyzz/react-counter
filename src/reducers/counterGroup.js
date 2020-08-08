const counterGroup = (state = init, action)=>{
    switch (action.type) {
        case "ADD":
            state.total += 1
            return {
                ...state
            }
        case "REDUCE":
            state.total -= 1
            return {
                ...state
            }
        case "CLEAR":
            state.total = 0
            return {
                ...state
            }
        default:
            return state;
    }
}

const init = {
    total: 0,
    number: 0
}

export default counterGroup;