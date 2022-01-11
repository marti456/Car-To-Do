import React from "react";
import {Alert } from '@mui/material'
class Allerts extends React.Component {
    renderAlert = () => {
        if (this.props.alert === 'noAllData') {
            return <Alert severity="error" variant="filled">
                    The form must be completed!
                </Alert>
        }
        else if (this.props.alert === 'shortPass') {
            return <Alert severity="error" variant="filled">
                    Password must be 8 or more charecters!
                </Alert>
        }
        else if (this.props.alert === 'notConfirm') {
            return <Alert severity="error" variant="filled">
                    Password not confirmed!
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