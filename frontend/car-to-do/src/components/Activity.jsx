import { Typography, Grid, Card, CardContent, CardHeader, IconButton, Chip, Stack } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
const Activity = (props) => {
    console.log(props.activity)
    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                        <CardHeader
                        action={
                        <IconButton aria-label="settings">
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