import React from "react";

import { CssBaseline, AppBar, Toolbar, Typography, Grid, Button} from "@mui/material";

class Bar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderButtons = () => {
        if (this.props.isLogged === false) {
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
                        {this.props.username}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="error" onClick={this.props.makeLogOut.bind(this)}>
                        Sign out
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        }
    }

    render() {
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
                            {this.renderButtons()}
                            
                        </Grid>
                    </Toolbar>
                </AppBar>
            </>
        ); 
    }
}

export default Bar;