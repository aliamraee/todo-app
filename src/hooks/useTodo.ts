import { useState } from "react"
import { ItemType } from "../types/ItemType"

const useTodo = ()=>{

    const setStorage = (data:ItemType[])=>{
        localStorage.setItem("todoData",JSON.stringify(data))
    }
    const getStorage = ()=>{
       const data = localStorage.getItem("todoData")
        if (data) {
            return JSON.parse(data)
        }
        return []
    }
    

    const [todoData, setTodoData] = useState<ItemType[]>(getStorage())

    const addTask = (title:string) => {
        if(title.trim()){
            const generateId = Math.random()*1000;

            setTodoData((prev:ItemType[])=>{
                const newTask = { title, id:generateId, completed:false }
                
                setStorage([...prev,newTask])
                return [...prev,newTask]
            })
            

        }
    }

    const toggleTask=(id:number)=>{
        setTodoData((prev:ItemType[])=>{
            const updatedData =  prev.map(item=>item.id === id?{...item,completed:!item.completed}:item) 

            setStorage(updatedData)

            return updatedData
        })
    }

    const removeTask =(id:number)=>{
        setTodoData((prev:ItemType[])=>{
            const updatedData =  prev.filter((item:ItemType)=>item.id !== id)
            setStorage(updatedData)
            return prev.filter((item:ItemType)=>item.id !== id)
        })
    }
    const editTask =(id:number,title:string)=>{
        setTodoData((prev:ItemType[])=>{
            const updatedData =  prev.map(item=>item.id === id?{...item,title}:item) 

            setStorage(updatedData)

            return updatedData
        })
    }

    return {
        todoData,
        addTask,
        toggleTask,
        removeTask,
        editTask
    }
}

export default useTodo
