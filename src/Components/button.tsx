import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

type PropsType = {
    buttonName: string
    onClickButton: () => void
    style: string
    name: string
}

const ButtonComponent = ({buttonName, onClickButton, style, name, ...props}: PropsType) => {



    const onClick = () => {
        onClickButton()
    }

    return (
        <>
            <Button variant="contained"
                    onClick={onClick}
                    className={style}>
                {name}
            </Button>
        </>
    );
};

export default ButtonComponent;