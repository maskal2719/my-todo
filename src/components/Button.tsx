import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
};

export default Button;