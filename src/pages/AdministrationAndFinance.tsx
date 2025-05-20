import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AdministrationAndFinance: React.FC = () => (
  <Container maxWidth="lg">
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Administration and Finance
      </Typography>
      <Typography variant="body1">
        Welcome to the Administration and Finance section. Here you can find
        information about administrative services and financial matters.
      </Typography>
    </Box>
  </Container>
);

export default AdministrationAndFinance;
