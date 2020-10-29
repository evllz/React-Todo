import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container, Box, Typography } from "@material-ui/core";
import "fontsource-roboto";
const tasks = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTask = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };
  addTask = (newTask) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { name: newTask, completed: false, id: Date.now() },
      ],
    });
  };
  clearCompletedTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };
  render() {
    return (
      <Container>
        <Typography variant="h2" align="center">
          Let's get everything done!
        </Typography>
        <Box
          style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <TodoForm addTask={this.addTask} />
        </Box>
        <Box>
          <TodoList
            tasks={this.state.tasks}
            toggleTask={this.toggleTask}
            clearCompletedTasks={this.clearCompletedTasks}
          />
        </Box>
      </Container>
    );
  }
}

export default App;
