import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#134975',
        },
        secondary: {
            main: '#8BB8A8',
        },
    },
    typography: {
        fontFamily: "Arial"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            }
        }
    }
});

export default appTheme;