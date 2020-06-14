import React, { useContext } from 'react'
import { TodosContext } from './TodosContext'

function EditModal() {
    const [todos, setTodos] = useContext(TodosContext)
    return (
        <div>
            Modal's word is: {todos[0].text}, { todos[1].text}
        </div>
    )
}

export default EditModal
