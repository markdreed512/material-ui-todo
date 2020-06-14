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
    const word = useContext(TodosContext)
    console.log(word)
    const classes = useStyles()
    let testItems = [{ text: "hi" }, { text: "dishes" }]
    const handleDelete = () => {
        console.log("deleting todo...")
    }
    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className={classes.divStyles}>

                    {testItems.map((todo,i) => {
                            return <div key={i}>
                                <Checkbox />
                                <TextField value={word} />
                                <Button onClick={handleDelete}>X</Button>
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
