export function startPawn(index, color) {
    return dispatch => {
        dispatch({
            type: "START_PAWN",
            payload: {
                index,
                color
            }
        })
    }
}

const delay = (ms) => new Promise(resolve =>
    setTimeout(resolve, ms)
);


export function changePawn(color) {
    return dispatch => {
        dispatch({
            type: "CHANGE_PAWN",
            payload: {
                color
            }
        })
    }
}