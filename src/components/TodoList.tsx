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

const TodoList = (props: TodoListPropsType) => {

    const setFilterAll = () => props.changeFilter('all')
    const setFilterActive = () =>  props.changeFilter('active')
    const setFilterCompleted = () => props.changeFilter('completed')

    return (
        <div>
            <h1>{props.title}</h1>
            <Input addNewTask={props.addTask}/>
            <Tasks tasks={props.tasks} removeTask={props.removeTask}/>
            <Button title={'All'} callBack={setFilterAll}/>
            <Button title={'Active'} callBack={setFilterActive}/>
            <Button title={'Completed'} callBack={setFilterCompleted}/>
        </div>
    );
};

export default TodoList;