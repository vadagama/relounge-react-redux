import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { SimpleCard } from 'app/components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
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

const Input = styled('input')({
    display: 'none',
  });

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

const AddEmployee = () => {
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
        name = 'Califirnia fitness',
        description = 'Find your fitness tribe here! We welcome everyone to join in on the fun, whether they are beginners or veterans. At Cal Fit, we make it a priority to offer classes for every member of the family, and each certified instructor can help you modify the movements for your fitness level.',
        address = '8680 Greenback Lane, Suite 108, Orangevale, CA 95662',
        phone = '(916) 987-2030',
        email ='california@finess.com' ,
        latitude = '38.67801112341825',
        longitude = '-121.23660716011435',
        openingHours = '10AM - 18PM'
    } = state

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.15,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
      }));
      
      const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      });
      
      const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }));
      
      const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      }));
      
      const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }));

    return (
        <div>
            <Box sx={{ py: '10px' }} />
                <SimpleCard title="Create Location">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={3} sm={12} xs={12}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                    <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <ImageButton
                        variant="contained" 
                        component="span"
                        focusRipple
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        >
                        <ImageSrc style={{ backgroundImage: `url('https://i.pinimg.com/originals/2f/ce/94/2fce94d3f8f3c95bd23faa6256342a91.png')` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 1,
                                pt: 1,
                                pb: (theme) => `calc(${theme.spacing(1)} + 3px)`,
                            }}
                            >
                                Upload
                            </Typography>
                        </Image>
                        </ImageButton>
                        </label>
                        </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Location Name"
                            type="text"
                            name="name"
                            id="standard-basic"
                            onChange={handleChange}
                            value={name || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            errorMessages={['this field is required']}
                        />

                        </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            multiline
                            maxRows="4"
                            rows="4"
                            label="Description"
                            onChange={handleChange}
                            type="text"
                            name="description"
                            value={description || ''}
                        />
                        </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                       <TextField
                            label="Email"
                            onChange={handleChange}
                            type="text"
                            name="email"
                            value={email || ''}
                        />
                        <TextField
                            label="Phone"
                            onChange={handleChange}
                            type="text"
                            name="phone"
                            value={phone || ''}
                        />
                        
                        <TextField
                            label="Address"
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={address || ''}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            label="Latitude"
                            onChange={handleChange}
                            type="text"
                            name="latitude"
                            value={latitude || ''}
                        />
                         <TextField
                            label="Longitude"
                            onChange={handleChange}
                            type="text"
                            name="longitude"
                            value={longitude || ''}
                        />
                        <TextField
                            label="Opening hours"
                            onChange={handleChange}
                            type="text"
                            name="openingHours"
                            value={openingHours || ''}
                        />
                        </Grid>
                        </Grid>
                <Box sx={{ py: '6px' }} />
                <Button color="primary" variant="contained" type="submit">
                        Save changes
                </Button>
            </ValidatorForm>
            </ SimpleCard>
        </div>
    )
}

export default AddEmployee
