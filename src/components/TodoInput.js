import React, { useState, useContext, useEffect } from 'react'
import { TodosContext } from './TodosContext'
import { TextField, Button, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    textFieldStyles: {
        backgroundColor: "rgba(0,200,200,.2)",
        width: "100%",
        margin: "2px 5px"
    },
    buttonStyles: {
        marginLeft: "20px",
        padding: "15px 5px",
        height: "60px",
        width: "100%"

    },

    formStyles: {
        width: "100%"

    }
})

function TodoInput() {
    const [ todos, setTodos ] = useContext(TodosContext)
    useEffect(()=>{
        localStorage.setItem("todos2", JSON.stringify(todos))
    }, [ todos ])
    const [inputValue, setInputValue] = useState("")
    const classes = useStyles()
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (inputValue) {
            const date = new Date()
            setTodos(todos.concat({ id: date.getTime(), text: inputValue, checked: false  }))
            setInputValue("")
        }
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            if (inputValue) {
                const dt = new Date()
                setTodos(todos.concat({ id: dt.getTime(), text: inputValue, checked: false }))
                setInputValue("")
            }
        }
    }

    return (

        <Grid container alignItems="center">
            <Grid item xs={3}></Grid>
            <Grid container item xs={6} className={classes.gridStyles}>
                    <Grid item xs={12} md={10} >
                        <TextField
                            onKeyDown={handleKeyDown}
                            label="Add Item"
                            variant="outlined"
                            className={classes.textFieldStyles}
                            onChange={handleChange}
                            value={inputValue} 
                            inputProps={{style: {fontSize: 27, paddingBottom: 10}}}
                        />
                    </Grid>
                    <Grid item xs={12} md={2} >
                        <Button
                            onClick={submit}
                            className={classes.buttonStyles}
                            variant="contained"
                            color="primary"
                        >
                            ADD
                    </Button>
                    </Grid>
            </Grid>
            <Grid item xs={3}></Grid>

        </Grid>

    )
}

export default TodoInput
