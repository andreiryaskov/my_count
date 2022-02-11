export const countReducer = (state: number, action: GeneralType) => {
    switch (action.type) {
        case 'INCREMENT': {
            let newState = state
            newState = action.payload.count < action.payload.maxValue
                ? action.payload.count + 1
                : action.payload.count
            return newState
        }
        case 'DECREMENT': {
            return Number(localStorage.getItem('start'))
        }
        case 'RERENDER-USE-EFFECT': {
            return Number(localStorage.getItem('start'))
        }
        default:
            return state
    }
}

type GeneralType = incrementCountAC | decrementCountAC | rerenderCountAfterReload

type incrementCountAC = ReturnType<typeof incrementCountAC>

export const incrementCountAC = (count: number, maxValue: number) => {
    return {
        type: 'INCREMENT',
        payload: {
            count,
            maxValue
        }
    } as const
}

type decrementCountAC = ReturnType<typeof decrementCountAC>

export const decrementCountAC = () => {
    return {
        type: 'DECREMENT'
    } as const
}

type rerenderCountAfterReload = ReturnType<typeof rerenderCountAfterReloadAC>

export const rerenderCountAfterReloadAC = () => {
    return {
        type: 'RERENDER-USE-EFFECT'
    } as const
}