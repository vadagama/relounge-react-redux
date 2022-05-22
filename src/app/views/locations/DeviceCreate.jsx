import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { Breadcrumb, SimpleCard } from 'app/components'
import { styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))


const DeviceCreate = () => {

    const [state, setState] = useState({
        date: new Date(),
    })

    const [location, setAge] = React.useState('');

  const handleLocation = (event) => {
    setAge(event.target.value);
  };

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const handleDeleteInterval = () => {
        console.info('You clicked the delete icon.');
      };

    const {
        uniqueNumber = 'TITI56839',
        name = 'Device 1',
        lastMedSertDate = '10.06.2012',
        warrantyTill = '10.05.2022',
        phoneDescription = 'Office phone',
        website = 'http://www.cbr.com',
        address = '246 Walworth Rd, London SE17 1JE, Great Britain',
        taxNumber = '3556662342',
        registrationNumber = 'BR4560982333334',
        branch = 'Fitness club',
        registrationDate = '22.03.2015',
        status = 'active',
    } = state
      


    return (
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={2}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <h2>Device 1</h2>
            </Grid>

            <Grid item lg={8} md={8} sm={12} xs={12}>
                <TextField
                    name="name"
                    label="Name"
                    type="text"
                    onChange={handleChange}
                    id="standard-basic"
                    value={name || ''}
                    validators={[
                        'required',
                        'minStringLength: 4',
                        'maxStringLength: 9',
                    ]}
                    errorMessages={['this field is required']}
                />
                <TextField
                    name="uniqueNumber"
                    label="Unique Number"
                    type="text"
                    onChange={handleChange}
                    value={uniqueNumber || ''}
                    validators={[
                        'required',
                        'minStringLength: 4',
                        'maxStringLength: 9',
                    ]}
                    errorMessages={['this field is required']}
                />
                {/* <FormControl fullWidth>
                    <InputLabel id="">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Location"
                        onChange={handleLocation}
                    >
                        <MenuItem value={10}>New-York Fitness</MenuItem>
                        <MenuItem value={20}>Columbia Fitness</MenuItem>
                        <MenuItem value={30}>California Snack Bar</MenuItem>
                    </Select>
                </FormControl> */}
                
                </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <TextField
                    name="lastMedSertDate"
                    label="Last Check Date"
                    type="text"
                    onChange={handleChange}                          
                    value={lastMedSertDate || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <TextField
                    name="warrantyTill"
                    label="Warranty Till"
                    type="text"
                    onChange={handleChange}                          
                    value={warrantyTill || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </Grid>
        </Grid>

        <Grid lg={8} md={8} sm={12} xs={12} sx={{ margin: '0px 6px 12px 0px '}}>
                <Divider />
            </Grid>

        <h4>Working hours</h4>

        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item lg={2} md={2} sm={12} xs={12}>
                <div>Monday</div>    
            </Grid>
            <Grid item lg={2} md={3} sm={12} xs={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                    <Chip label="10:00 - 12:00" variant="outlined"  onDelete={handleDeleteInterval} />
                </Stack>
            </Grid>
            <Grid item lg={2} md={3} sm={12} xs={12} sx={{ minWidth: '100px'}}>
                <Stack alignItems="center" direction="row" spacing={1}>
                    <Chip label="13:00 - 19:00" variant="outlined"  onDelete={handleDeleteInterval}/>
                </Stack>
            </Grid>
        </Grid>
        <Button startIcon={<AddIcon />}>
        Add working interval
      </Button>
      <Grid lg={8} md={8} sm={12} xs={12} sx={{margin: '12px 0px'}}>
                <Divider />
            </Grid>

        <h4>Exceptions (non working)</h4>

        <Grid container sx={{ alignItems: 'center' }}>
            <Grid item lg={2} md={2} sm={12} xs={12}>
                <div>25.09.2022</div>    
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                    <Chip label="10:00 - 17:00" variant="outlined"  onDelete={handleDeleteInterval} />
                </Stack>
            </Grid>
        </Grid>

        <Button startIcon={<AddIcon />}>
        Add exception
      </Button>


        <Box sx={{ py: '16px' }} />
        <Stack spacing={2} direction="row">
            <Button color="primary" variant="contained" type="submit">
                    Save Changes
            </Button>
            <Button color="error" variant="contained" type="submit">
                    Delete Device
            </Button>
        </Stack>
        
    </ValidatorForm>
    )
}

export default DeviceCreate
