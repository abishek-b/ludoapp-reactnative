const rollDice = (state = { dice_value: 1 }, action) => {
    switch (action.type) {
        case 'ROLL_DICE':
            return { ...state, dice_value: action.value }
    }


    return state
}

export default rollDice;