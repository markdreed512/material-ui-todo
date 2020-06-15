import React, { useContext } from 'react'
import { TodosContext } from './TodosContext'

function EditModal() {
    const [todos, setTodos] = useContext(TodosContext)
    return (
        <div>
            Modal
        </div>
    )
}

export default EditModal
