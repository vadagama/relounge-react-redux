import {
    Grid,
    FormControl,
    RadioGroup,
    Radio,
    Card,
    Divider,
    TextField,
    MenuItem,
    InputLabel,
    Select,
    Tabs,
    Tab,
    Button,
} from '@mui/material'
import { Formik } from 'formik'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState, useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const WorkingHours = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const ScheduleBody = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '120px 120px 135px 10px 150px',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',

}))

const ScheduleElement = styled('div')(({ theme }) => ({
    margin: '5px'
}))

    return (
        <div>
            <Box sx={{ py: '10px' }} />
            <SimpleCard title="Working Hours">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                {weekDays.map((day) => (
                                    <div>
                                    <ScheduleBody>
                                    <ScheduleElement>
                                    {day}
                                    </ScheduleElement>
                                    <ScheduleElement>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            name="customerType"
                                            value={values.customerType}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel control={<Switch defaultChecked />} label="Open" />
                                        </RadioGroup>
                                    </FormControl>  
                                    </ScheduleElement>
                                    <ScheduleElement>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <Select
                                            name="input"
                                            id="demo-select-small"
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                            <em>{TimeElements[0]}</em>
                                            </MenuItem>
                                            {TimeElements.map((item,id) => (
                                                <MenuItem value={id}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>    
                                    </ScheduleElement>
                                    <ScheduleElement>
                                    to  
                                    </ScheduleElement>
                                    <ScheduleElement>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <Select
                                            name="input"
                                            id="demo-select-small"
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                            <em>{TimeElements[0]}</em>
                                            </MenuItem>
                                            {TimeElements.map((item,id) => (
                                                <MenuItem value={id}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>  
                                    </ScheduleElement>
                                </ScheduleBody>
                                </div>
                                ))}
                                
                                                               
                            </Grid>
                            <Box sx={{ py: '16px' }} />
                            <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Save schedule
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </SimpleCard>
        </div>
    )
}

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const initialValues = {
    customerType: '',
}

const TimeElements = ['09:00','09:30','10:30', '11:00', '11:30', '12:00','12:30','13:00']

export default WorkingHours
