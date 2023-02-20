import React, {ChangeEvent} from 'react';
import {TasksType} from "../App";

type TasksPropsType = {
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

const Tasks = (props: TasksPropsType) => {


    let resultTasks = props.tasks.length
        ?
        props.tasks.map(el => {

            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeStatus(el.id, e.currentTarget.checked)
            }
            const onRemoveHandler = () => {
                props.removeTask(el.id)
            }

            return <li className={el.isDone ? 'is-done' : ''} key={el.id}>
                <input checked={el.isDone} onChange={onChangeHandler} type="checkbox"/>
                <span>{el.title}</span>
                <button onClick={onRemoveHandler}>X
                </button>
            </li>
        })
        :
        'Нет тасок'

    return (
        <ul>
            {resultTasks}
        </ul>
    );
};

export default Tasks;