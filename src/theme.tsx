import  '@fontsource/roboto';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#231810',
        },
        secondary: {
            main: '#FCF3C0',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
    spacing: (factor:number) => `${1 * factor}px`,
});

export default theme;