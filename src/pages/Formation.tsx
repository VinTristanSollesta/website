import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Formation: React.FC = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Formation
      </Typography>
      <Typography variant="body1">
        Welcome to the Formation section. Here you can find information about
        our educational programs and training initiatives.
      </Typography>
    </Box>
  </Container>
);

export default Formation;
