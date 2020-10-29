// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import { Box, Button, Card, CardContent } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "fontsource-roboto";

export default function TodoList(props) {
  return (
    <Box>
      {props.tasks.map((task) => {
        return (
          <Card
            style={{
              margin: "5px",
            }}
            key={task.id}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}>
                <Todo task={task} toggleTask={props.toggleTask} />
                {task.completed ? <CheckCircleIcon /> : null}
              </div>
            </CardContent>
          </Card>
        );
      })}
      <Button
        variant="contained"
        color="primary"
        style={{ width: "25%", marginLeft: "37.5%", marginTop: "5px" }}
        onClick={props.clearCompletedTasks}>
        Clear completed tasks
      </Button>
    </Box>
  );
}
