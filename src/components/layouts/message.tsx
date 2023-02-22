import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ThemeProvider} from "@mui/material";
import theme from "@/components/layouts/theme";

interface MessageProps {
    text: string;
}

function Message(props: MessageProps) {
    const { text } = props;

    return (
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                display: 'inline-flex',
                justifyContent: 'start',
                alignItems: 'center',
                maxHeight: '50px',
                padding: '5px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: 'fit-content',
                margin: '3px 0px 3px 5px',

            }}
        >
            <Typography variant="body2" >{text}</Typography>
        </Box>
        </ThemeProvider>
    );
}
export default Message;