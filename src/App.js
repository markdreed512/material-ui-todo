import React from 'react';
import './App.css';
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import { CssBaseline, makeStyles, Grid } from '@material-ui/core'
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
    <CssBaseline>
      <Grid container>
      <Grid id="left-alley" item xs={0} md={3}></Grid>

        <Grid item xs={12} md={6}>
          <div className={classes.mainStyle}>
            <Title />
            <TodoInput />
          </div>
        </Grid>
        <Grid id="right-alley" item xs={0} md={3}></Grid>
      </Grid>
    </CssBaseline>
  );
}

export default App;
