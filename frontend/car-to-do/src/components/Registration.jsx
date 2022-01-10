import React from "react";
import { Container, CssBaseline, Typography, Paper, Grid, TextField, Button } from '@mui/material'


class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmPass: ''
        }
    }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(this.state)
    }

    async postData() {
        const content = {
            username: this.state.username,
            password: this.state.password
        }
        const response = await axios.post('https://localhost:8080/register.php', content)
        console.log(response)
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label="Confirm password"
                                    onChange={this.handleChange('confirmPass')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container justifyContent="center" >
                                    <Grid item>
                                        <Button variant="contained" color="success" size="large"  >Sign up</Button>
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
