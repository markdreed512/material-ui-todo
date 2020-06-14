import React, { useContext } from 'react'
import { TodosContext } from './TodosContext'
import { Grid, TextField, Button, Checkbox, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    divStyles: {
        border: "1px solid black",
        marginTop: "10px"
    }
})

function TodoList() {
    const [todos, setTodos] = useContext(TodosContext)
    const classes = useStyles()
    const handleDelete = () => {
        console.log("deleting todo...")
    }
    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className={classes.divStyles}>

                    {todos.map((todo,i) => {
                            return <div key={i}>
                                <Checkbox />
                                <TextField value={todo.text} />
                                <Button onClick={()=>setTodos([{id:3, text: "new"},{id:4, text: "new"}])}>X</Button>
                            </div>
                            })
                    }
                        
                    
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default TodoList
