import React from 'react';
import './App.css';
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import { CssBaseline, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  mainStyle: {
    backgroundColor: "teal"
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <CssBaseline>
      <Grid container>
      <Grid item xs={0} md={3}></Grid>

        <Grid item xs={12} md={6}>
          <main className={classes.mainStyle}>
            <Title />
            <TodoInput />
          </main>
        </Grid>
        <Grid item xs={0} md={3}></Grid>
      </Grid>
    </CssBaseline>
  );
}

export default App;
