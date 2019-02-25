import {createMuiTheme} from 'material-ui/styles';
import indigo from 'material-ui/colors/purple';
import orange from 'material-ui/colors/purple';
import {red100} from 'material-ui/styles/colors';

// Configure Material UI theme
const theme = createMuiTheme ({
  palette: {
    primary: indigo,
    accent: red100,
    type: 'light',
  },
});

export default theme;
