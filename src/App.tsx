import React, {ChangeEvent} from 'react';
import './App.css';
import Input from "./Components/input";
import ButtonComponent from "./Components/button";
import {decrementCountAC, incrementCountAC, onChangeMaxValueAC, onChangeStartValueAC,} from "./bll/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()


    const increment = () => {
        dispatch(incrementCountAC(maxValue, startValue))
    }

    const decrement = () => {
        dispatch(decrementCountAC(startValue))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValueFromInput = Number(e.currentTarget.value)
        dispatch(onChangeStartValueAC(startValueFromInput))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValueFromInput = Number(e.currentTarget.value)
        dispatch(onChangeMaxValueAC(maxValueFromInput))
    }

    const set = () => {
        dispatch(decrementCountAC(startValue))
    }

    const disableButtonDecr = value === startValue ? 'disable' : ''
    const disableButtonInc = value === maxValue ? 'disable' : ''

    return (
        <div className="App">
            <div className={'container'}>
                <Input onChangeInput={onChangeStartValue}
                       value={startValue}
                       inputName={'start value'}
                       label={'start value'}/>
                <Input onChangeInput={onChangeMaxValue}
                       value={maxValue}
                       inputName={'max value'}
                       label={'max value'}/>
                <div className={'buttons-container'}>
                    <ButtonComponent buttonName={'set'}
                                     onClickButton={set}
                                     style={''}
                                     name={'set'}/>
                </div>
            </div>
            <div className={'container'}>
                <Input onChangeInput={onChangeMaxValue}
                       value={value}
                       inputName={''}
                       label={'count'}/>
                <div className={'buttons-container'}>
                    <ButtonComponent buttonName={'inc'}
                                     onClickButton={increment}
                                     style={disableButtonInc}
                                     name={'inc'}/>
                    <ButtonComponent buttonName={'decr'}
                                     onClickButton={decrement}
                                     style={disableButtonDecr}
                                     name={'decr'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
