import React from "react";
import { Container, CssBaseline, Typography, Paper, Grid, TextField, Button, Alert } from '@mui/material'
import axios from 'axios';

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmPass: '',
            alert: ''
        }
    }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(this.state)
    }

    async postData() {
        if (this.state.username === '' || this.state.password === '' || this.state.confirmPass === '') {
            this.setState({alert: 'noAllData'})
        }
        else if (this.state.password.length < 8) {
            this.setState({alert: 'shortPass'})
        }
        else if( this.state.password !== this.state.confirmPass) {
            this.setState({alert: 'notConfirm'})
        }
        else {
            const content = {
                username: this.state.username,
                password: this.state.password
            }
            const response = await axios.post('http://localhost:8080/Car-To-Do/register.php', content)
            console.log(response)
        }
    }

    renderAlert = () => {
        if (this.state.alert === 'noAllData') {
            return <Alert severity="error" variant="filled">
                    The form must be completed!
                </Alert>
        }
        else if (this.state.alert === 'shortPass') {
            return <Alert severity="error" variant="filled">
                    Password must be 8 or more charecters!
                </Alert>
        }
        else if (this.state.alert === 'notConfirm') {
            return <Alert severity="error" variant="filled">
                    Password not confirmed!
                </Alert>
        }
    }

    render() {
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
                                {this.renderAlert()}
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    onChange={this.handleChange('username')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    onChange={this.handleChange('password')}
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label="Confirm password"
                                    onChange={this.handleChange('confirmPass')}
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <Button variant="contained" color="success" size="large"  onClick={this.postData.bind(this)}>Sign up</Button>
                                    </Grid>  
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </>
        );
    }
}

export default Registration;
