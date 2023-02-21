import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

export default theme;