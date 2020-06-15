import React, { useState, useContext } from 'react'
import { TodosContext } from './TodosContext'
import { TextField, Button, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    textFieldStyles: {
        backgroundColor: "rgba(0,200,200,.2)",
        width: "97%",
        margin: "2px 5px"
    },
    buttonStyles: {
        margin: "2px 5px",
        padding: "15px 5px",
        width: "97%"

    },

    formStyles: {
        width: "100%"

    }
})

function TodoInput() {
    const [todos, setTodos] = useContext(TodosContext)
    const [inputValue, setInputValue] = useState("")
    const classes = useStyles()
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (inputValue) {
            const date = new Date()
            setTodos(todos.concat({ id: date.getTime(), text: inputValue }))
            setInputValue("")
        }
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            if (inputValue) {
                const dt = new Date()
                setTodos(todos.concat({ id: dt.getTime(), text: inputValue }))
                setInputValue("")
            }
        }
    }

    return (

        <Grid container alignItems="center">
            <Grid item xs={3}></Grid>
            <Grid container item xs={6} className={classes.gridStyles}>
                {/* <form onSubmit={submit} className={classes.formStyles}> */}
                    <Grid item xs={12} md={9} >
                        <TextField
                            onKeyDown={handleKeyDown}
                            label="Add Item"
                            variant="outlined"
                            className={classes.textFieldStyles}
                            onChange={handleChange}
                            value={inputValue} />
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Button
                            onClick={submit}
                            className={classes.buttonStyles}
                            variant="contained"
                            color="primary"
                        >
                            ADD
                    </Button>
                    </Grid>
                {/* </form> */}

            </Grid>
            <Grid item xs={3}></Grid>

        </Grid>

    )
}

export default TodoInput
