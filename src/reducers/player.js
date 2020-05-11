const initState = {
    dice_value: 1,
    ready_to_roll: true,
    current_pawn: 'blue',
    previous_pawn : 'yellow',
    pawn_pos: {
        blue: [0, 0, 0, 0],
        red: [0, 0, 0, 0],
        green: [0, 0, 0, 0],
        yellow: [0, 0, 0, 0],
    },
    play_zone : {}
}


const pawn = (state = initState, action) => {
    switch (action.type) {
        case 'ROLL_DICE':
            return { ...state, dice_value: action.value, ready_to_roll: false }
        case 'READY_TO_ROLL':
            return { ...state, ready_to_roll: true }
        case 'DISABLE_ROLL':
            return { ...state,  ready_to_roll: false}
        case 'MOVE_PAWN':
            return { ...state, pawn_pos: action.value }
        case 'CHANGE_PREVIOUS_PAWN':
            return { ...state, previous_pawn:action.payload.color }
        case 'CHANGE_PAWN':
            return { ...state, current_pawn:action.payload.color, ready_to_roll: true  }
        case 'START_PAWN':
            const pawn_pos = { ...state.pawn_pos }
            pawn_pos[action.payload.color][action.payload.index] = 1
            const play_zone = { ...state.play_zone}
            play_zone[action.payload.color][13].push([action.payload.color])
            return { ...state, pawn_pos: pawn_pos , ready_to_roll: true, play_zone:play_zone }
        case 'INIT_PLAY_ZONE':
            return {...state, play_zone: action.payload.play_zone}
    }


    return state
}

export default pawn;