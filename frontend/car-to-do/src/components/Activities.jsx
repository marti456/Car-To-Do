import { Grid, Button, Modal } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from 'axios';
import ActivityForm from './ActivityForm';
import Activity from './Activity';

const Activities = (props) => {
    
    const [open, setOpen] = useState(false)
    const [types, setTypes] = useState(null)
    const [activities, setActivities] = useState([])
    const handleOpen = async () => {
        await getTypes()
        setOpen(true) 
    } 
    const handleClose = () => setOpen(false);

    const getTypes = async () => {
        const response = await axios.get('http://localhost:8080/Car-To-Do/getTypes.php')
        setTypes(response.data)
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.username) {
            navigate('/login')
        }
        
    })

    const getActivities = async () => {
        const response = await axios.post('http://localhost:8080/Car-To-Do/getActivities.php', { username: props.username })
        setActivities(response.data)
    }

    useEffect( async () => {
        await getActivities()
    }, [])
    

    return (
        <>
            <Grid container spacing={1} justifyContent="center" style={{marginTop: "1%"}}>
                <Grid item>
                    <Button variant="contained" color="success" onClick={handleOpen}>
                        Add activity
                    </Button>
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <ActivityForm handleClose={handleClose} types={types} username={props.username} getActivities={getActivities}/>
                    </Modal>
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="flex-start" style={{padding: "3%"}}>
                { 
                    activities.map(activity => <Activity activity={activity} key={activity["id"]} getActivities={getActivities}/>) 
                }
            </Grid>
        </>
    );
} 

export default Activities;