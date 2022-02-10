import React from 'react';

type PropsType = {
    buttonName: string
    onClick: () => void
    style: string
}

const Button = (props: PropsType) => {

    const onClick = () => {
        props.onClick()
    }

    return (
        <>
            <button onClick={onClick} className={props.style}>{props.buttonName}</button>
        </>
    );
};

export default Button;