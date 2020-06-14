import React from 'react';
import './App.css';
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import EditModal from './components/EditModal'
import { makeStyles, Grid } from '@material-ui/core'
import bgImage from './images/paven.png'
import { TodosContext } from './components/TodosContext'
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
      <Grid id="left-alley" item xs={false} md={2}></Grid>

      <Grid item xs={12} md={8}>
        <div id="main" className={classes.mainStyle}>
          <Title />
          <TodoInput />
          <TodosContext.Provider value={"howdy"}>
            <TodoList />
            <EditModal />
          </TodosContext.Provider>

        </div>
      </Grid>
      <Grid id="right-alley" item xs={false} md={2}></Grid>
    </Grid>

  );
}

export default App;
