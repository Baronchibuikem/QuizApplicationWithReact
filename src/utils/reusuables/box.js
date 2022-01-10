import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Boxsx({ children }) {
  return (
    <Paper elevation={16}>
      <Box
        sx={{
          width: "50vw",
          height: "70vh",
          backgroundColor: "primary.dark",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
