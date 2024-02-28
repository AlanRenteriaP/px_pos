import React, {useState} from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import InventoryTable from "@pages/dashboard/pages/inventoryManagement/InventoryTable";
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import {setAlert} from "@redux/features";
import {change_password} from "@src/services";
import {registerSuccess} from "@redux/auth";
import {Navigate} from "react-router-dom";






    function ProfileSettings() {
        const [newPassword, setNewPassword] = useState('');
        const [newToken, setNewToken] = useState('');
        const token = useAppSelector(state => state.auth.token);

        async function handleSubmit (e: any){
            e.preventDefault();

            try {
                const responseToken = await change_password(token!, newPassword);
                setNewToken(responseToken);
            } catch (error) {
                console.error('Failed to change password:', error);
            }
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                </label>
                <button type="submit">Change Password</button>
                {newToken && <p>New Token: {newToken}</p>}
            </form>
        );
    }

// function ProfileSettings() {
//     const dispatch = useDispatchTyped();
//     const token = useAppSelector(state => state.auth.token);
//     const [credentials, setCredentials] = React.useState({newpassword: '', token});
//
//     async function handleSubmit(e: any) {
//         e.preventDefault();
//         if (credentials.newpassword) {
//             dispatch(setAlert({msg: "Attempting Change Password", alertType: "info"}));
//             try {
//                 const token = await change_password(credentials);
//                 dispatch(setAlert({msg: "Password Change Successful", alertType: "success"}));
//                 dispatch(registerSuccess(token));
//                 // setIsRegistered(true);
//                 console.log(token);
//             } catch (error: any) {
//                 dispatch(setAlert({msg: error.message, alertType: "warning"}));
//             }
//         } else {
//             dispatch(setAlert({msg: "No field should be empty", alertType: "info"}));
//         }
//     }
//
//         return (
//             <div className="container">
//                 <div className="row">
//                     <h2> Profile Settings </h2>
//                     <div className="col-md-12">
//                         {/* Change Password Section */}
//                         <h4> Change Password </h4>
//                         <Grid container spacing={3}>
//                             <Grid item xs={5}>
//                                 <Box component="form" onSubmit={handleSubmit} display="flex"
//                                      justifyContent="space-between" alignItems="center">
//                                     <TextField
//                                         id="outlined-email-input"
//                                         label="Password"
//                                         type="text"
//                                         autoComplete="current-email"
//                                         style={{width: '100%', marginTop: '10px'}}
//                                         value={credentials.newpassword}
//                                         onChange={(event) => setCredentials({
//                                             ...credentials,
//                                             newpassword: event.target.value
//                                         })}
//                                         color="secondary"
//                                     />
//                                     <Button variant="contained" onSubmit={handleSubmit} color="primary"> Update
//                                     </Button>
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     </div>
//                 </div>
//             </div>
//         );
//
// }

export default ProfileSettings;

