import React from 'react';
import './App.css';
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import { makeStyles, Grid } from '@material-ui/core'
import bgImage from './images/paven.png'
const useStyles = makeStyles({
  mainStyle: {
    backgroundImage: `url(${bgImage})`,
    height: "100vh"
  }
})

const App = () => {
  const classes = useStyles()
  return (
    
      <Grid container>
      <Grid id="left-alley" item xs={0} md={3}></Grid>

        <Grid item xs={12} md={6}>
          <div id="main" className={classes.mainStyle}>
            <Title />
            <TodoInput />
            <TodoList />
          </div>
        </Grid>
        <Grid id="right-alley" item xs={0} md={3}></Grid>
      </Grid>
    
  );
}

export default App;
