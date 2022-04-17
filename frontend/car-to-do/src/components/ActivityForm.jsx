import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField, Stack, IconButton, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import Allerts from "./Allerts";

const ActivityForm = (props) => {

    const [name, setName] = useState('')
    const [description, setDescriptio] = useState('')
    const [type, setType] = useState('')
    const [endTime, setEndTime] = useState(new Date())
    const [alert, setAlert] = useState('')

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescriptio(event.target.value)
    }

    const handleChangeType = (event) => {
        setType(event.target.value)
    }


    const addActivity = () => {

    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" style={{marginTop: "3%"}}>
                <Paper elevation={12} style={{padding: "8%"}}>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <IconButton size="large" onClick={props.handleClose}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" color="textPrimary" align="center">Add Workspace</Typography>
                            <hr />
                        </Grid>
                        {alert ? (
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Allerts alert={alert} />
                                    </Grid>
                        ) : null}
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Name"
                                value = {name}
                                onChange ={handleChangeName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Description"
                                value = {description}
                                onChange ={handleChangeDescription}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={handleChangeType}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} fullWidth/>}
                                label="End time"
                                value={endTime}
                                onChange={setEndTime}
                            />
                        </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={addActivity}>Create</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
} 

export default ActivityForm;