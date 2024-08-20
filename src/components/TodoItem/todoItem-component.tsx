import React, { useState } from 'react'
import { ItemType } from '../../types/ItemType'

interface PropsType extends ItemType {
    toggleTask: (arg: number) => void;
    removeTask: (arg: number) => void;
    editTask: (arg0: number, arg1: string) => void
}

function TodoItem(props: PropsType) {
    const [editedVlaue, setEditedVlaue] = useState(props.title)
    const [enableEdit, setEnableEdit] = useState<boolean>(false)
    return (
        <div className='p-4 flex gap-2 justify-between rounded-lg border border-gray-200'>

            <div className='flex gap-2 items-center'>
                <input
                    checked={props.completed}
                    onChange={() => {
                        props.toggleTask(props.id)
                    }}
                    type="checkbox"

                />
                <h4>{props.title}</h4>
                <button className="text-red-500 bg-transparent px-3 py-1" onClick={() => props.removeTask(props.id)}>delete</button>
            </div>

            {enableEdit ? <div className='flex items-center space-x-2'>
                <input className='border p-2 border border-gray-300 p-2 rounded-lg' value={editedVlaue} onChange={(e) => {
                    const value = e.target.value
                    if (value.trim()) {
                        setEditedVlaue(e.target.value)
                    }
                }} type="text" />

                <button className='bg-green-500 text-white px-3 py-1 rounded-lg' onClick={() => {
                    props.editTask(props.id, editedVlaue)
                    setEnableEdit(false)
                }}>save</button>
            </div> : <button className='px-3 py-1' onClick={() => setEnableEdit((prev: boolean) => !prev)}>edit</button>}
        </div>
    )
}

export default TodoItem