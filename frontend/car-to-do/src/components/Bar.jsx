import React from "react";

import { CssBaseline, AppBar, Toolbar, Typography, Grid, Button} from "@mui/material";

const Bar = (props) => {
    const renderButtons = () => {
        if (!props.username) {
            return <Grid item >
                        <Grid container spacing={1}>
                            <Grid item>
                                <Button variant="contained" color="success" href="/login">
                                    Sign in
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="info" href="/registration">
                                    Sign up
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
        } 
        else {
            return <Grid item >
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography variant="h6">
                                    {props.username}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="error" onClick={props.makeLogOut}>
                                    Sign out
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
        }
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Grid container justifyContent="space-between">
                       <Grid item>
                            <Typography variant="h6">
                                Car to do
                            </Typography>
                        </Grid>
                        {renderButtons()}
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
} 

export default Bar;