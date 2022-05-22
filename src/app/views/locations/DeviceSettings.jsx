import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Breadcrumb, SimpleCard } from 'app/components'
import { styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeviceCreate from './DeviceCreate';

const DeviceSettings = () => {


    return (
        <div>
            <Box sx={{ py: '10px' }} />
            <SimpleCard title="Device Settings">
            <Grid container spacing={{ md: 3 }}>
            <Grid item xs={6} md={3}>
            <ListItem disablePadding>
                <h4>Devices</h4>
            </ListItem>
            <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="Device 1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Device 2" />
                </ListItemButton>
            </ListItem>
            </List>
        </Grid>
        <Grid item xs={6} md={9}>
            <DeviceCreate />
        </Grid>
        </Grid>
            </SimpleCard>
        </div>
    )
}

export default DeviceSettings
