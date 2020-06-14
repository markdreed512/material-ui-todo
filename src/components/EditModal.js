import React, { useContext } from 'react'
import { TodosContext } from './TodosContext'

function EditModal() {
    const word = useContext(TodosContext)
    return (
        <div>
            Modal's word is: {word}
        </div>
    )
}

export default EditModal
