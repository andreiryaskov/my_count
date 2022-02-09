import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Input from "./Components/input";
import Button from "./Components/button";

function App() {
    let [start, setStartValue] = useState(0)
    let [max, setMaxValue] = useState(0)
    let [count, setCount] = useState(0)

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
        setCount(Number(localStorage.getItem('max')))
    }

    const set = () => {
        localStorage.setItem('start', JSON.stringify(start))
        localStorage.setItem('max', JSON.stringify(max))
    }

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
                    <Button buttonName={'set'} onClick={set}/>
                </div>
            </div>
            <div>
                <Input onChange={onChangeMaxValue}
                       value={count}
                       inputName={''}/>
                <div className={'buttons-container'}>
                    <Button buttonName={'inc'} onClick={increment}/>
                    <Button buttonName={'decr'} onClick={decrement}/>
                </div>
            </div>
        </div>
    );
}

export default App;
