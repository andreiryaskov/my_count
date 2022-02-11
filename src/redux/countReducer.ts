import {StateType} from "../App";


export const countReducer = (state: StateType[], action: GeneralType) => {
    switch (action.type) {
        case 'INCREMENT': {
            return (
                action.payload.count < action.payload.maxValue
                    ? action.payload.count + 1
                    : action.payload.count
            )

            //setCount(count < maxValue ? count + 1 : count)
        }
        case 'DECREMENT': {
            return Number(localStorage.getItem('start'))
        }
        default:
            return state
    }
}

type GeneralType = incrementCountAC | decrementCountAC

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