import React from 'react';

type PropsType = {
    buttonName: string
    onClickButton: () => void
    style: string
}

const Button = ({buttonName, onClickButton, style, ...props}: PropsType) => {

    const onClick = () => {
        onClickButton()
    }

    return (
        <>
            <button onClick={onClick} className={style}>{buttonName}</button>
        </>
    );
};

export default Button;