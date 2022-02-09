import React from 'react';

type PropsType = {
    buttonName: string
    onClick: () => void
}

const Button = (props: PropsType) => {

    const onClick = () => {
        props.onClick()
    }

    return (
        <div>
            <button onClick={onClick}>{props.buttonName}</button>
        </div>
    );
};

export default Button;