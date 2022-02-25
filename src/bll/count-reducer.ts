import {Dispatch} from "redux";
import {ChangeEvent} from "react";
import {AppStateType} from "./store";

const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 0

}

type InitialStateType = typeof initialState
type ActionType = IncrementCountAC | DecrementCountAC | JnChangeStartValueAC | OnChangeMaxValueAC

type IncrementCountAC = ReturnType<typeof incrementCountAC>
type DecrementCountAC = ReturnType<typeof decrementCountAC>
type JnChangeStartValueAC = ReturnType<typeof onChangeStartValueAC>
type OnChangeMaxValueAC = ReturnType<typeof onChangeMaxValueAC>

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-COUNTER': {
            return {
                ...state,
                value: state.value < action.payload.maxValue
                    ? state.value + 1
                    : state.value,
                startValue: state.startValue,
                maxValue: state.maxValue
            }
        }
        case 'DECR-COUNTER': {
            return {
                ...state,
                value: action.payload.startValue
            }
        }
        case "CHANGE-START-VALUE": {
            return {
                ...state,
                startValue: action.payload.startValue
            }
        }
        case "CHANGE-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        default:
            return state
    }
}



export const incrementCountAC = (maxValue: number, startValue: number) => {
    return {
        type: 'INC-COUNTER',
        payload: {
            maxValue,
            startValue
        }
    } as const
}

export const decrementCountAC = (startValue: number) => {
    return {
        type: 'DECR-COUNTER',
        payload: {
            startValue
        }
    } as const
}

export const onChangeStartValueAC = (startValueFromInput: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            startValue: startValueFromInput
        }
    } as const
}

export const onChangeMaxValueAC = (maxValueFromInput: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue: maxValueFromInput
        }
    } as const
}


 //THUNK
export const setValueLocalStorageTC = (startValue: number, maxValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('start', JSON.stringify(startValue))
    localStorage.setItem('max', JSON.stringify(maxValue))
    dispatch(decrementCountAC(startValue))
}

export const setValueToLocalStorageTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    let currentValue = getState().counter.value
    localStorage.setItem('value', JSON.stringify(currentValue))
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let startValueAsString = localStorage.getItem('start')
    let maxValueAsString = localStorage.getItem('max')
    if (startValueAsString && maxValueAsString) {
        let newStartValue = JSON.parse(startValueAsString)
        let newMaxValue = JSON.parse(maxValueAsString)
        dispatch(decrementCountAC(newStartValue))
        dispatch(onChangeStartValueAC(newStartValue))
        dispatch(onChangeMaxValueAC(newMaxValue))
    }
}
