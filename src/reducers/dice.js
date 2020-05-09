const initialState = {
    dice_value: 1,
    ready_to_roll: true
}
const rollDice = (state = initialState, action) => {
    switch (action.type) {
        case 'ROLL_DICE':
            return { ...state, dice_value: action.value, ready_to_roll: false }
        case 'READY_TO_ROLL':
            return { ...state, ready_to_roll: true }
        case 'DISABLE_ROLL':
            return { ...state,  ready_to_roll: false}
    }


    return state
}

export default rollDice;