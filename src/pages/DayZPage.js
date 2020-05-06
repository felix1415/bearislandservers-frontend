import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {dayzfont} from '../utils/DayZFont.js'

const dayZFontTheme = createMuiTheme({
  typography: {
    fontFamily: 'twentyEightDaysLater, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [dayzfont],
      },
    },
  },
});

//https://cdn.battlemetrics.com/b/standardVertical/4900472.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&showPlayers=1&maxPlayersHeight=300

export default function DayZ() {
	return (
		<Box my={4}>
		<div>
		<ThemeProvider theme={dayZFontTheme}>

		<CssBaseline />
        <Typography variant="h1">
	        	Bear Island DayZ
		</Typography>
  
	    </ThemeProvider>
	    </div>


        <Typography variant="h1">
	        	Bear Island DayZ
		</Typography>
		        <Typography variant="h3">
	        	Bear Island DayZ
		</Typography>
		        <Typography variant="h5">
	        	Bear Island DayZ
		</Typography>

  
	    </Box>


	);
}