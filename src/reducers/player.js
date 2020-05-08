const initState = {
    current_pawn: 'blue',
    pawn_pos: {
        blue: [0, 0, 0, 0],
        red: [0, 0, 0, 0],
        green: [0, 0, 0, 0],
        yellow: [0, 0, 0, 0],
    }
}


const pawn = (state = initState, action) => {
    switch (action.type) {
        case 'MOVE_PAWN':
            return { ...state, pawn_pos: action.value }
        case 'CHANGE_PAWN':
            return {...state, current_pawn}
    }


    return state
}

export default pawn;