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
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterType
}

const TodoList:React.FC<TodoListPropsType> = ({title, tasks,changeFilter,removeTask, addTask, changeStatus, filter}) => {

    const setFilterAll = () => changeFilter('all')
    const setFilterActive = () =>  changeFilter('active')
    const setFilterCompleted = () => changeFilter('completed')

    return (
        <div>
            <h1>{title}</h1>
            <Input addNewTask={addTask}/>
            <Tasks tasks={tasks} removeTask={removeTask} changeStatus={changeStatus}/>
            <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'} callBack={setFilterAll}/>
            <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'} callBack={setFilterActive}/>
            <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'} callBack={setFilterCompleted}/>
        </div>
    );
};

export default TodoList;