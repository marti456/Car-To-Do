import { Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"

const Activities = (props) => {
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.username) {
            navigate('/login')
        }
    })

    return (
        <>
            <Grid container spacing={1} justifyContent="center" style={{marginTop: "1%"}}>
                <Grid item>
                    <Button variant="contained" color="success">
                        Add activity
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="flex-start" style={{marginTop: "1%", padding: "1%"}}>
                <Grid item>
                    <Button variant="contained" color="success">
                        Add activity
                    </Button>
                </Grid>
            </Grid>
        </>
    );
} 

export default Activities;