import { Container, Typography, Grid, Box } from "@mui/material";
import { Keyboard, AutoFixHigh, Lightbulb, Language } from "@mui/icons-material";
import RecyclingIcon from '@mui/icons-material/Recycling';


const Features: React.FC = () => {
  return (
    <Box py={16} bgcolor="bg-slate-200">
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <RecyclingIcon sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Eco Friendly
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Totally not made from real monkeys
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <AutoFixHigh sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Magical
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Get your dose of magic with our mythical monkeys
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Lightbulb sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Thought Provoking
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Wonder why those monkeys are in those situations with us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Language sx={{ fontSize: 48, color: "indigo.500" }} />
              <Typography variant="h4" gutterBottom>
                Globally Known
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We are known all over the world for our monkey apparel
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
