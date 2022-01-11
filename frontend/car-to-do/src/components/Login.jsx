import React from "react";
import { Container, CssBaseline, Typography, Paper, Grid, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            alert: ''
        }
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    async postData() {
        if (this.state.username === '' || this.state.password === '') {
            this.setState({alert: 'noAllData'})
        }
        else {
            const content = {
                username: this.state.username,
                password: this.state.password
            }
            const response = await axios.post('http://localhost:8080/Car-To-Do/login.php', content)
            console.log(response)
            window.location.href='/';
        }
    }

    renderAlert = () => {
        if (this.state.alert === 'noAllData') {
            return <Alert severity="error" variant="filled">
                    The form must be completed!
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
                            Sign in
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
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <Button variant="contained" color="success" size="large"  >Sign in</Button>
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

export default Login;