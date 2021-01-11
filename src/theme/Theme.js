import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, grey, blue, deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[800],
    },
    secondary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[800],
    },
    background: {
      default: grey[50],
    },
    action: {
      selected: deepPurple[800],
      hover: blue[700],
      active: deepPurple[900],
      focus: deepPurple[200],
    },
  },
  typography: {
    htmlFontSize: 14,
  },
});

export default theme;

// import { amber, blue, blueGrey, brown, cyan } from "@material-ui/core/colors";
// import { deepPurple, deepOrange, green, grey } from "@material-ui/core/colors";
// import { orange } from "@material-ui/core/colors";
// import { indigo, lightBlue, lightGreen, lime } from "@material-ui/core/colors";
// import { pink, purple, red, teal, yellow } from "@material-ui/core/colors";
