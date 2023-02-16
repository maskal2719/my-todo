import React from 'react';
import Button from "./Button";
import Input from "./Input";
import Tasks from "./Tasks";
import {FilterType, TasksType} from "../App";

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    changeFilter: (filter: FilterType) => void
    removeTask: (id: string) => void;
    addTask: (title: string) => void;
}

const TodoList:React.FC<TodoListPropsType> = ({title, tasks,changeFilter,removeTask, addTask}) => {

    const setFilterAll = () => changeFilter('all')
    const setFilterActive = () =>  changeFilter('active')
    const setFilterCompleted = () => changeFilter('completed')

    return (
        <div>
            <h1>{title}</h1>
            <Input addNewTask={addTask}/>
            <Tasks tasks={tasks} removeTask={removeTask}/>
            <Button title={'All'} callBack={setFilterAll}/>
            <Button title={'Active'} callBack={setFilterActive}/>
            <Button title={'Completed'} callBack={setFilterCompleted}/>
        </div>
    );
};

export default TodoList;