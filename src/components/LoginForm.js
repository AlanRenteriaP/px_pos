import React  from 'react';
import { useDispatch }  from 'react-redux';
import { FormControl, Button } from '@material-ui/core';
import {alertActions, authActions} from "../redux/actions";
import TextField from '@mui/material/TextField';



function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');



    function handleSubmit(e) {
        e.preventDefault();


        if (email && password) {
              dispatch(alertActions.success('There is a password and user typed in the text box'));
             dispatch(authActions.login(email,password));
        } else{
            dispatch(alertActions.error('Please fill all the fields'));
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }} >
            <FormControl  elevation={3} style={{ display: 'block' , width:'100%'}}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    style={{  width:'100%', marginTop:'10px'}}
                    id="outlined-multiline-flexible"
                    multiline
                    color="secondary"
                    InputProps={{
                        style: { color: 'red !important' },
                    }}
                />

            </FormControl>
            <FormControl elevation={3} style={{ display: 'block' , width:'100%', maxWidth:'800px'}}>

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{  width:'100%', marginTop:'10px'}}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    color="secondary"
                />

            </FormControl>
            <FormControl elevation={3} style={{ display: 'block' }}>
                <Button type="submit" variant="contained" color="primary"  style={{  width:'100%' , marginTop:'10px'}}>
                    Login
                </Button>
            </FormControl>
        </form>
    );
}

export default  LoginForm;


// <Input
//     label="Eamil"
//     value={email}
//     placeholder="Email"
//     onChange={(event) => setEmail(event.target.value)}
//     multiline
//     style={{  width:'100%', marginTop:'10px'}}
// />