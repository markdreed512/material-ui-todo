import React, { useContext } from 'react'
import { TodosContext } from './TodosContext'
import { Grid, TextField, Button, Checkbox, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    divStyles: {
        marginTop: "10px"
    },
    textFieldStyles: {
        width: "100%"
    },
    buttonStyles: {
        marginTop: "22px",
        marginLeft: "5px",
        height: "50px",
        width: "100%"


    },
    strikeThrough: {
        textDecoration: "line-through"
    },
    inline: {
        display: "inline-block"
    },
    checkboxStyles: {
        transform : "scale(2)",
        paddingTop: "20px"
    }
})

function TodoList() {
    const [todos, setTodos] = useContext(TodosContext)
    const classes = useStyles()
    const handleDelete = (e) => {
        const editedTodos = todos.filter((todo)=>{
           return todo.id !== parseInt(e.currentTarget.id)
        })
        setTodos(editedTodos)
    }
    const handleEdit = (e) => {
        let editedTodos = todos.map((todo)=>{
            if(todo.id === parseInt(e.target.id)){
                todo.text = e.target.value
            }
            return todo
        })
        setTodos(editedTodos)

    }
    const handleCheck = (e) => {
        let editedTodos = todos.map((todo)=>{
            if(todo.id === parseInt(e.target.id)){
                todo.checked = !todo.checked
            }
            return todo
        })
        setTodos(editedTodos)
    }
    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className={classes.divStyles}>
                    {todos.map((todo,i) => {
                            return <div key={i}>
                                <Grid item container xs={1} className={classes.inline}>
                                    <Checkbox 
                                        checked={todo.checked}
                                        onChange={handleCheck}
                                        id={todo.id.toString()} 
                                        className={classes.checkboxStyles}
                                        // inputProps={{style: {height: "100px"}}}

                                    />
                                </Grid>
                                <Grid item container xs={10} className={classes.inline}>
                                    {todo.checked? 
                                        <TextField 
                                            id={todo.id.toString()} 
                                            value={todo.text} 
                                            onChange={handleEdit} 
                                            variant="filled" 
                                            inputProps={{style: {fontSize: 27, paddingTop: 10}}}
                                            className={`${classes.textFieldStyles} ${classes.strikeThrough}`}
                                            />
                                        : <TextField 
                                            id={todo.id.toString()} 
                                            value={todo.text} 
                                            onChange={handleEdit} 
                                            variant="filled" 
                                            inputProps={{style: {fontSize: 27, paddingTop: 10}}}
                                            className={classes.textFieldStyles}
                                            />
                                    }
                                    
                                </Grid>
                                <Grid item container xs={1} className={classes.inline}>
                                    <Button 
                                        onClick={handleDelete}
                                        id={todo.id.toString()}
                                        className={classes.buttonStyles}
                                        color="secondary"
                                        variant="contained"
                                    >X</Button>
                                </Grid>
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
