import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

type PropsType = {
    value: number
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    inputName: string
    label: string
}



const Input = ({value, onChangeInput, inputName, label,...props}: PropsType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }

    return (
        <div>
            <InputLabel htmlFor="outlined-basic">{label}</InputLabel>
            <TextField placeholder={inputName}
                       id="outlined-basic"
                       variant="outlined"
                       type="number"
                       value={value}
                       onChange={onChange}/>

        </div>
    )
};

export default Input;