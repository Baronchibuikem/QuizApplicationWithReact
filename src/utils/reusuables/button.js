import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function Button(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} onClick={props.handleClick}>
      <Fab variant="extended" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        {props.text}
      </Fab>
    </Box>
  );
}
