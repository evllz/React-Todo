import React from "react";
import { Typography } from "@material-ui/core";
import "fontsource-roboto";

export default function Todo(props) {
  const handleClick = () => {
    props.toggleTask(props.task.id);
  };
  return <Typography onClick={handleClick}>{props.task.name}</Typography>;
}
