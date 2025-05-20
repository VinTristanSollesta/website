import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import theme from "../theme";

const Home: React.FC = () => (
  <Container maxWidth="lg">
    <Grid container spacing={2} sx={{ mt: 4, mb: 4 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          First Days of School Activities
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          Circulars and Announcements
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default Home;
