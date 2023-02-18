import React from 'react';
import {Button, Container} from "@mui/material";

interface MyButtonProps {
    title: string
    onClick: () => void
    justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const MyButton = ({title, onClick, justifyContent}: MyButtonProps) => {
    return (
        <Container sx={{display: 'flex', justifyContent: justifyContent || 'center', margin:'5px 0 5px'}}>
            <Button
                size={'small'}
                variant="contained"
                color={'primary'}
                onClick={onClick}>{title}
            </Button>
        </Container>
    );
};

export default MyButton;