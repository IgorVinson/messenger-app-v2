import React from 'react';
import {Box, TextField} from "@mui/material";
import Message from "@/components/ui/message";
import MyButton from "@/components/ui/myButton";

const MessagesField = () => {
    
    return (
       <>
           <Box sx={{flex: 'auto', display: 'flex', flexDirection: 'column',}}>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
           </Box>
           <TextField
               fullWidth id="outlined-basic"
               label="Outlined"
               variant="outlined"
               sx={{position: 'absolute', bottom: 0, left: 0, right: 0}}
           />
           <Box sx={{position: 'absolute', bottom: '5px', right: '-15px'}}><MyButton title={'sms'}/></Box>
       </>
    );
};

export default MessagesField;