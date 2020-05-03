import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';

import MainBar from './NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkRouter
} from "react-router-dom";


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

      <Box my={2}>

        <MainBar/>

        
        <ProTip />
        <Copyright />
        
      </Box>
    </Container>
  );
}