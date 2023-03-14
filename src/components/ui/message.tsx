import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ThemeProvider} from "@mui/material";
import theme from "@/components/ui/theme";
import {useSelector} from "react-redux";

interface MessageProps {
    text: string;
    sender_id: number;
}

function Message(props: MessageProps) {
    const { text, sender_id } = props;
    const user_id = useSelector((state: any) => state.user.id);
    const isUserSender = sender_id === user_id;

    return (
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                alignSelf: isUserSender ? 'flex-end' : 'flex-start',
                maxHeight: '50px',
                padding: '5px',
                backgroundColor: isUserSender ? '#8ee163' : '#f5f5f5',
                borderRadius: '4px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                margin: '3px 0px 3px 5px',
                marginRight: isUserSender ? '5px' : '0px',

            }}
        >
            <Typography variant="body2" >{text}</Typography>
        </Box>
        </ThemeProvider>
    );
}
export default Message;