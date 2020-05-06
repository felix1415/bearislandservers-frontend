import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d05353',
    },
    secondary: {
      main: '#e58f65',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#191919',
    },
    text: {
      primary: '#fff000',
    },
  },
});

export default theme;
