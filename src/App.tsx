import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import './App.css';
import Input from "./Components/input";
import Button from "./Components/button";
import {countReducer} from "./redux/countReducer";

export type SettingsType = {
    startValue: number
    maxValue: number
}

function App() {

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState(0)

    useEffect(() => {
        setCount(Number(localStorage.getItem('start')))
    }, [])

    useEffect(() => {
        setStartValue(Number(localStorage.getItem('start')))
    }, [])

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('max')))
    }, [])


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const increment = () => {
        setCount(count < maxValue ? count + 1 : count)
    }

    const decrement = () => {
        setCount(Number(localStorage.getItem('start')))
    }

    const set = () => {
        localStorage.setItem('start', JSON.stringify(startValue))
        localStorage.setItem('max', JSON.stringify(maxValue))
        decrement()
    }

    const disableButtonDecr = count === startValue ? 'disable' : ''
    const disableButtonInc = count === maxValue ? 'disable' : ''

    return (
        <div className="App">
            <div className={'settings-container'}>
                <Input onChangeInput={onChangeStartValue}
                       value={startValue}
                       inputName={'start value'}/>
                <Input onChangeInput={onChangeMaxValue}
                       value={maxValue}
                       inputName={'max value'}/>
                <div className={'buttons-container'}>
                    <Button buttonName={'set'}
                            onClickButton={set}
                            style={''}/>
                </div>
            </div>
            <div>
                <Input onChangeInput={onChangeMaxValue}
                       value={count}
                       inputName={''}/>
                <div className={'buttons-container'}>
                    <Button buttonName={'inc'}
                            onClickButton={increment}
                            style={disableButtonInc}/>
                    <Button buttonName={'decr'}
                            onClickButton={decrement}
                            style={disableButtonDecr}/>
                </div>
            </div>
        </div>
    );
}

export default App;
