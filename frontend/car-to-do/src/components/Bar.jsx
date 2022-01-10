import React from "react";

import { CssBaseline, AppBar, Toolbar, Typography, Link, Grid} from "@mui/material";

const Bar = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container justifyContent="space-between">
                       <Grid item>
                            <Typography variant="h6">
                                Car to do
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h6">
                                        <Link style={{color: 'white'}} href="/login">
                                            Sign in
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        /
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        <Link style={{color: 'white'}} href="/registration">
                                            Sign up
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Bar;