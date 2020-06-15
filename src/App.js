import React, { useState } from 'react'
import './App.css'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { TodosContext } from './components/TodosContext'
import { makeStyles, Grid } from '@material-ui/core'
import bgImage from './images/paven.png'
const useStyles = makeStyles({
  mainStyle: {
    backgroundImage: `url(${bgImage})`,
    height: "100vh",
    width: "100%"
  }
})

const App = () => {
  const classes = useStyles()
  const [ todos, setTodos] = useState([])
  return (

    <Grid container>
      <Grid id="left-alley" item xs={false} md={2}></Grid>

      <Grid item xs={12} md={8}>
        <div id="main" className={classes.mainStyle}>
          <Title />
          <TodosContext.Provider value={[todos, setTodos]}>
            <TodoInput />
            <TodoList />
          </TodosContext.Provider>

        </div>
      </Grid>
      <Grid id="right-alley" item xs={false} md={2}></Grid>
    </Grid>

  );
}

export default App;
