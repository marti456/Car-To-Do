import React from "react";
import { Container, CssBaseline, Typography, Paper, Grid, TextField, Button } from '@mui/material'

class Login extends React.Component {
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
                                <TextField
                                    fullWidth
                                    label="Username"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
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