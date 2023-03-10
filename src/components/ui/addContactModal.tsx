import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MyButton from "@/components/ui/myButton";
import {Container, TextField} from "@mui/material";
import {addContact} from "@/redux/options";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddContactModal() {
    const dispatch: Dispatch = useDispatch()

    const [contact, setContact] = React.useState({
        name: '',
        phone: '',
        email: '',
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const saveContact = () => {
        // @ts-ignore
        dispatch(addContact(contact))
        setContact({
            name: '',
            phone: '',
            email: '',
        })
        handleClose()
    }

    return (
        <div>
            <MyButton title={'Add contact'} onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add contact
                    </Typography>
                    <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                        <TextField sx={{marginTop: '5px'}}
                                   fullWidth label="Name"
                                   value={contact.name}
                                   onChange={(e) => setContact({...contact, name: e.target.value})}/>

                        <TextField sx={{marginTop: '5px'}}
                                   fullWidth label="Phone" value={contact.phone}
                                   onChange={(e) => setContact({...contact, phone: e.target.value})}/>

                        <TextField sx={{marginTop: '5px'}}
                                   fullWidth label="Email" value={contact.email}
                                   onChange={(e) => setContact({...contact, email: e.target.value})}/>

                        <MyButton title={'Save'} onClick={saveContact}/>

                    </Container>
                </Box>
            </Modal>
        </div>
    );
}

