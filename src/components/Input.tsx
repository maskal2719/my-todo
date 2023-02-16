import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    addNewTask: (title: string) => void
}

const Input = (props: InputPropsType) => {

    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask()
        }
    }

    const addTask = () => {
        const trimmedTitle = value.trim()
        const length = value.length < 15 && value.length > 3;
        if(trimmedTitle && length) {
            props.addNewTask(value)
            setValue('')
        }
    }

    return (
        <>
            <input onKeyDown={onKeyDownHandler} value={value} onChange={onChangeHandler} type="text"/>
            <button onClick={addTask} disabled={value.length < 4 || value.length > 15}>+</button>
        </>
    );
};

export default Input;