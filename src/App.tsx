import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Input from "./Components/input";
import Button from "./Components/button";

function App() {

    let [start, setStartValue] = useState(0)
    let [max, setMaxValue] = useState(0)
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
        setCount(count < max ? count + 1 : count)
    }

    const decrement = () => {
        setCount(Number(localStorage.getItem('start')))
    }

    const set = () => {
        localStorage.setItem('start', JSON.stringify(start))
        localStorage.setItem('max', JSON.stringify(max))
        decrement()
    }

    const disableButtonDecr = count === start ? 'disable' : ''
    const disableButtonInc = count === max ? 'disable' : ''

    return (
        <div className="App">
            <div className={'settings-container'}>
                <Input onChange={onChangeStartValue}
                       value={start}
                       inputName={'start value'}/>
                <Input onChange={onChangeMaxValue}
                       value={max}
                       inputName={'max value'}/>
                <div className={'buttons-container'}>
                    <Button buttonName={'set'}
                            onClick={set}
                            style={''}/>
                </div>
            </div>
            <div>
                <Input onChange={onChangeMaxValue}
                       value={count}
                       inputName={''}/>
                <div className={'buttons-container'}>
                    <Button buttonName={'inc'}
                            onClick={increment}
                            style={disableButtonInc}/>
                    <Button buttonName={'decr'}
                            onClick={decrement}
                            style={disableButtonDecr}/>
                </div>
            </div>
        </div>
    );
}

export default App;
