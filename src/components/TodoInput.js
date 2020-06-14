import React from 'react'
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

    }
})

function TodoInput() {
    const classes = useStyles()
    return (

        <Grid container alignItems="center">
            <Grid item xs={3}></Grid>
            <Grid item container xs={6}>
                <Grid item  xs={12} md={10}>
                    <TextField 
                        label="Add Item"
                        variant="outlined" 
                        className={classes.textFieldStyles} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button 
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
