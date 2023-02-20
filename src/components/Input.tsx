import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    addNewTask: (title: string) => void
}

const Input = (props: InputPropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addTask()
        }
    }

    const addTask = () => {
        if (title.trim() !== '') {
            props.addNewTask(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <>
            <input onKeyDown={onKeyDownHandler} value={title} onChange={onChangeHandler} type="text"
                   className={error ? 'error' : ''}/>
            <button onClick={addTask} disabled={title.length < 4 || title.length > 30}>+</button>
            {error && <div className='error-message'>Field is required</div>}
        </>
    );
};

export default Input;