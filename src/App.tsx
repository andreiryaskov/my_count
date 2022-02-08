import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    let [start, setStart] = useState('')

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.value)
    }

    return (
        <div className="App">
            <div>
                <input type="number"
                       value={start}
                       onChange={onChangeStartValue}/>
            </div>
        </div>
    );
}

export default App;
