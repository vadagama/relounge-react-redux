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
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled, useTheme } from '@mui/system'

const MembershipSettings = () => {
    return (
        <div>
            <Box sx={{ py: '10px' }} />
            <SimpleCard title="Membership">
           Membership
           </SimpleCard>
        </div>
    )
}

export default MembershipSettings
