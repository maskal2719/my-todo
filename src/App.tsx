import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./components/TodoList";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TS', isDone: true},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Apollo', isDone: false},
        {id: v1(), title: 'Material', isDone: true},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Query', isDone: true}
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    const filterChange = (tasks: TasksType[], filter: FilterType) => {
        if (filter === 'active') {
            return tasks.filter(el => !el.isDone)
        }
        if (filter === 'completed') {
            return tasks.filter(el => el.isDone)
        }
        return tasks
    }

    const filteredTasks = filterChange(tasks, filter);
    const filterCh = (filter: FilterType) => {
        setFilter(filter)
    }

    const changeStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(el => el.id === id);
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    const removeTask = (id: string) => {
        let updateTasks = tasks.filter(el => el.id !== id)
        setTasks(updateTasks)
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks([newTask, ...tasks])
    }

    return (
        <div className="App">
            <TodoList title={'MyTestTodo'}
                      tasks={filteredTasks}
                      changeFilter={filterCh}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
