import React, {ChangeEvent} from 'react';

type PropsType = {
    value: number
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    inputName: string
}



const Input = ({value, onChangeInput, inputName,...props}: PropsType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }

    return (
        <div>
            {inputName}
            <input type="number"
                   value={value}
                   onChange={onChange}/>
        </div>
    )
};

export default Input;