import React from "react";
import { TextField, Button, FormControl, FormGroup } from "@material-ui/core";
import "fontsource-roboto";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <FormControl style={{ width: "100%" }}>
        <FormGroup>
          <TextField
            fullWidth
            style={{ margin: "5px" }}
            label="What's next?"
            variant="outlined"
            name="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: "25%", marginLeft: "37.5%" }}
          onClick={this.handleSubmit}>
          Add
        </Button>
      </FormControl>
    );
  }
}

export default TodoForm;
