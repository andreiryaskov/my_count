import React, {ChangeEvent} from 'react';

type PropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputName: string
}



const Input = (props: PropsType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e)
    }

    return (
        <div>
            {props.inputName}
            <input type="number"
                   value={props.value}
                   onChange={onChange}/>
        </div>
    )
};

export default Input;