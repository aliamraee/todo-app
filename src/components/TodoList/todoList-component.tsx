import React, { useState } from 'react'
import useTodo from '../../hooks/useTodo'
import TodoItem from "../TodoItem"
import { ItemType } from '../../types/ItemType'

function TodoList() {
    const [inputData, setInputData] = useState<string>("")
    const { todoData, addTask, toggleTask, removeTask, editTask } = useTodo()
    console.log(todoData);

    return (
        <div className="space-y-4">
            <div className="flex space-x-2">
                <input
                    className='p-2 border border-slate-300 outline-none rounded-lg shadow-sm flex-1'
                    value={inputData} type="text" placeholder='plase enter task name' onChange={(e) => {
                        setInputData(e.target.value)
                    }} />

                <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                    addTask(inputData)
                    setInputData("")
                }
                }>add</button>
            </div>
            <div className="space-y-3">
                {todoData.map((item: ItemType) => {
                    return <TodoItem key={item.id} {...item} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
                })}
            </div>
        </div>
    )
}

export default TodoList