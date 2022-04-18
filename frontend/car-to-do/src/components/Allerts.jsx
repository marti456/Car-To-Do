import React from "react";
import {Alert } from '@mui/material'

class Allerts extends React.Component {
    renderAlert = () => {
        if (this.props.alert) {
            return <Alert severity="error" variant="filled">
                    {this.props.alert}
                </Alert>
        }
    }
    
    render() {
        return (
            <>
                {this.renderAlert()}
            </>
        );
    }
}

export default Allerts;