import { Typography, Grid, Card, CardContent, CardHeader, IconButton, Chip, Stack } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Activity = (props) => {

    const deleteActivity = async () => {
        console.log(props.activity["id"])
        const response = await axios.post('http://localhost:8080/Car-To-Do/deleteActivity.php', { activity_id: props.activity["id"] })
        if (response.data === "Activity deleted successfully") {
            props.getActivities()
        }
        console.log(response)
    }

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                        <CardHeader
                        action={
                        <IconButton aria-label="settings" onClick={deleteActivity}>
                            <CancelIcon />
                        </IconButton>
                        }
                        title={props.activity["name"]}
                        subheader={props.activity["endTime"]}
                    />
                    <CardContent>
                        <Stack direction="row" spacing={1} justifyContent="center">
                            <Chip label={props.activity["type_name"]} color="primary"/>
                        </Stack>
                        <hr />
                        <Typography variant="body2" color="text.secondary">
                            {props.activity["description"]}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
} 

export default Activity;