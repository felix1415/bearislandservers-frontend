import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import MainBar from './AppBarTest';
import TitlebarGridList from './ServerGrid';

import Grid from '@material-ui/core/Grid';
import Kitten1 from "./assets/kitten400_1.jpg";
import Kitten2 from "./assets/kitten400_2.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Bear Island Servers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container fixed>
      <MainBar />
      <Box my={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          Bear Island Servers
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >

        <TitlebarGridList />

        </Grid>


        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
