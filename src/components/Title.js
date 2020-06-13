import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    titleStyle: {
        fontSize: "50px",
        padding: "30px"
    }
})

function Title() {
    const classes = useStyles()
    return (
        
        <Typography className={classes.titleStyle} align="center">
            MateriaList
        </Typography>
    )
}

export default Title
