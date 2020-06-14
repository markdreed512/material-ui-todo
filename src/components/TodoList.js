import React from 'react'
import { Grid, TextField, Button, Checkbox, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    divStyles: {
        border: "1px solid black",
        marginTop: "10px"
    }
})

function TodoList() {
    const classes = useStyles()
    let testItems = [{ text: "laundry" }, { text: "dishes" }]
    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className={classes.divStyles}>
                    {testItems.map(todo => {
                        return (

                            <div >
                                <Checkbox />
                                <TextField value={todo.text} />
                                <Button>X</Button>
                            </div>

                        )
                    })}
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default TodoList
