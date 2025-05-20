import React from "react";
import { Box, Typography, Container } from "@mui/material";

const President: React.FC = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        President's Office
      </Typography>
      <Typography variant="body1">
        Welcome to the President's section. Here you can find information about
        the President's office and related activities.
      </Typography>
    </Box>
  </Container>
);

export default President;
