import React from 'react';
import {TasksType} from "../App";

type TasksPropsType = {
    tasks : Array<TasksType>
    removeTask: (id: string) => void
}

const Tasks = (props: TasksPropsType) => {

    let resultTasks = props.tasks.length ? props.tasks.map(el => <li key={el.id}><input defaultChecked={el.isDone} type="checkbox"/><span>{el.title}</span>
        <button onClick={() => {props.removeTask(el.id)}}>X</button> </li> ) : 'Нет тасок'

    return (
        <ul>
            {resultTasks}
        </ul>
    );
};

export default Tasks;