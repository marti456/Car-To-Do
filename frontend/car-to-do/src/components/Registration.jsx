import React, { useState } from "react";
import { Container, CssBaseline, Typography, Paper, Grid, TextField, Button, Alert } from '@mui/material'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Registration = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [alert, setAlert] = useState('')

    const navigate = useNavigate();

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeConfirmPass = (event) => {
        setConfirmPass(event.target.value)
    }


    const postData = async () => {
        props.makeLogIn(username)
        navigate('/')
        if (username === '' || password === '' || confirmPass === '') {
            setAlert('noAllData')
        }
        else if (password.length < 8) {
            setAlert('shortPass')
        }
        else if( password !== confirmPass) {
            setAlert('notConfirm')
        }
        else {
            const content = {
                username: username,
                password: password
            }
            const response = await axios.post('http://localhost:8080/Car-To-Do/register.php', content)
            console.log(response)
            props.makeLogIn(username)
            navigate('/')
        }
    }

    const renderAlert = () => {
        if (alert === 'noAllData') {
            return <Alert severity="error" variant="filled">
                    The form must be completed!
                </Alert>
        }
        else if (alert === 'shortPass') {
            return <Alert severity="error" variant="filled">
                    Password must be 8 or more charecters!
                </Alert>
        }
        else if (alert === 'notConfirm') {
            return <Alert severity="error" variant="filled">
                    Password not confirmed!
                </Alert>
        }
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs" style={{marginTop: "8%"}}>
                <Paper elevation={12} style={{padding: "8%"}}>
                    <Typography variant="h4" color="textPrimary" align="center">
                        Sign up
                    </Typography>
                    <hr />
                    <br />
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            {renderAlert}
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label="Username"
                                onChange={handleChangeUsername}
                                value={username}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                onChange={handleChangePassword}
                                value={password}
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label="Confirm password"
                                onChange={handleChangeConfirmPass}
                                value={confirmPass}
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center" >
                                <Grid item>
                                    <Button variant="contained" color="success" size="large"  onClick={postData.bind(this)}>Sign up</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}


export default Registration;
