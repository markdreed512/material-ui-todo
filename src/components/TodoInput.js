import React from 'react'
import { TextField, Button } from '@material-ui/core'
function TodoInput() {
    return (
        <form>
            <TextField variant="outlined"/>
            <Button>ADD</Button>
        </form>
    )
}

export default TodoInput
