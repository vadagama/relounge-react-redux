import {
    Button,
    Icon,
    Grid,
    Card,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Box
} from '@mui/material'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled, useTheme } from '@mui/system'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))


const CompanyDetails = () => {

    const [state, setState] = useState({
        date: new Date(),
    })

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

    const {
        companyName = 'СBR GMBH',
        email = 'admin@сbr.com',
        phone = '+7 (44) 34-56-7',
        website = 'http://www.cbr.com',
        country = 'Germany',
        city = 'Schweinfurt',
        street = 'Brombergstraße',
        building = '7',
        postalCode = '97424',
        taxNumber = '3556662342',
        registrationNumber = 'BR4560982333334',
        branch = 'Fitness club',
        registrationDate = '22.03.2015',
        status = 'active',
    } = state


    return (
        <div>
            <Box sx={{ py: '10px' }} />
                <SimpleCard title="Company details">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            name="companyName"
                            label="Company Name"
                            type="text"
                            onChange={handleChange}
                            value={companyName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            type="text"
                            onChange={handleChange}
                            id="standard-basic"
                            value={phone || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="registration Number"
                            onChange={handleChange}
                            name="registrationNumber"
                            type="text"
                            value={registrationNumber || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                                "password didn't match",
                            ]}
                        />

                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextField
                            label="Website"
                            onChange={handleChange}
                            type="text"
                            name="website"
                            value={website || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            onChange={handleChange}
                            id="standard-basic"
                            value={email || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="VAT Number"
                            onChange={handleChange}
                            name="taxNumber"
                            type="test"
                            value={taxNumber || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    </Grid>

                    <Divider>Address</Divider>
                        <Box sx={{ py: '10px' }} />
                <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                       <TextField
                            label="Country"
                            onChange={handleChange}
                            type="text"
                            name="country"
                            value={country || ''}
                        />
                        <TextField
                            label="Street"
                            onChange={handleChange}
                            type="text"
                            name="street"
                            value={street || ''}
                        />
                        <TextField
                            label="Postal Code"
                            onChange={handleChange}
                            type="text"
                            name="postalCode"
                            value={postalCode || ''}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="City"
                            onChange={handleChange}
                            type="text"
                            name="city"
                            value={city || ''}
                        />
                        <TextField
                            label="Building"
                            onChange={handleChange}
                            type="text"
                            name="building"
                            value={building || ''}
                        />
                        </Grid>
                        </Grid>
                <Box sx={{ py: '6px' }} />
                <Button color="primary" variant="contained" type="submit">
                        Save Changes
                </Button>
                
            </ValidatorForm>
            </ SimpleCard>
        </div>
    )
}

export default CompanyDetails
