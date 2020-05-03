import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe'


import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function Rust() {
	const classes = useStyles();
	const theme = createMuiTheme();

	return (
		<Container fixed>
		<Box my={4}>

			<ThemeProvider theme={theme}>
		        <Typography variant="h1" component="h1" gutterBottom>
		          Bear Island Rust Server
		        </Typography>
		    </ThemeProvider>
	        <Typography>
				[EU/UK] Bear Island | No BP Wipes | Low Upkeep | Max 4 per group | Monthly Map hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
	        </Typography>

			<Grid container spacing={4}>
			<Grid item xs={12}>
			  <Paper className={classes.paper}>xs=12</Paper>
			</Grid>
			<Grid item xs={6}>
			  <Paper className={classes.paper}>xs=6</Paper>
			</Grid>
			<Grid item xs={6}>
			  <Paper className={classes.paper}>xs=6</Paper>
			</Grid>
			<Grid item xs={2}>
			  <Paper className={classes.paper}>xs=3</Paper>
		  		<Iframe src="https://cdn.battlemetrics.com/b/standardVertical/2910904.html?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&showPlayers=1&maxPlayersHeight=700" 
		        name="jwtpo"
		        height="1020px"
		        width="200px" />
		    {/*Hegiht can be played with once we know the general size of the rules and server info on this page*/}
			</Grid>
			<Grid item xs={9}>
			  <Paper className={classes.paper}>xs=9</Paper>
			  <Typography >
			  		Test Typography. rules and info go here
			  </Typography>
			</Grid>
			</Grid>



	    </Box>
	    </Container>
	);
}