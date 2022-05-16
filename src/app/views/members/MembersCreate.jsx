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
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import { Breadcrumb, SimpleCard } from 'app/components'
import { styled, useTheme } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))



const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const MembersCreate = () => {
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
        firstName,
        lastName,
        mobile,
        password,
        confirmPassword,
        email,
    } = state

    return (
        <div>
            <Container>
                <div className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Members', path: '/members' },
                            { name: 'Create new member', path: '/members/create' },
                        ]}
                    />
                </div>
                <SimpleCard title="Create member form">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            type="text"
                            name="lastName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={lastName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="LastName"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />

                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Phone"
                            onChange={handleChange}
                            type="text"
                            name="mobile"
                            value={mobile || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Password"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={password || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Confirm Password"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword || ''}
                            validators={['required', 'isPasswordMatch']}
                            errorMessages={[
                                'this field is required',
                                "password didn't match",
                            ]}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ py: '6px' }} />
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button>
            </ValidatorForm>
            </ SimpleCard>
</ Container>
        </div>
    )
}

export default MembersCreate
