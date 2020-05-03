import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';

import Home from './pages/Home';
import DayZ from './pages/DayZPage';
import Rust from './pages/RustPage';
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RLink
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  title: {
    marginLeft: theme.spacing(10),
    flexGrow: 1,
  },
}));

export default function MainBar() {
  const classes = useStyles();

  return (
    <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>

              <ButtonGroup color="pink" variant="outlined" size="large" aria-label="primary button group"> 
              <nav>
                <Link component={RLink} to="/" variant="button" color="textPrimary" href="#" className={classes.link} >
                  Home
                </Link>
                <Link component={RLink} to="/dayz" variant="button" color="textPrimary" href="#" className={classes.link} >
                  DayZ
                </Link>
                <Link component={RLink} to="/rust" variant="button" color="textPrimary" href="#" className={classes.link}>
                  Rust
                </Link>
                <Link component={RLink} to="/contact" variant="button" color="textPrimary" href="#" className={classes.link}>
                  Contact
                </Link>

              </nav>
              </ButtonGroup>

              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>

              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dayz">
              <DayZ />
            </Route>
            <Route exact path="/rust">
              <Rust />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>



    </Router>

  );
}