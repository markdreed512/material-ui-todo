import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    titleStyle: {
        fontSize: "30px"
    }
})

function Title() {
    const classes = useStyles()
    return (
        <Typography className={classes.titleStyle}>
            Material UI Todo List
        </Typography>
    )
}

export default Title
