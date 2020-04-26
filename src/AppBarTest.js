import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    marginLeft: theme.spacing(10),
    flexGrow: 1,
  },
}));

export default function MainBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ButtonGroup color="pink" aria-label="primary button group"> 
            <Button>DayZ</Button>
            <Button>Rust</Button>
            <Button>Contact</Button>
          </ButtonGroup>

          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}