import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
    Badge,
    Button,
    TablePagination,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationsCreate from './LocationsCreate';
import { Link, useHistory } from 'react-router-dom'

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

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const Locations = [
    {
        name: 'New York Fitness',
        address: 'Cologne, Sweitz st. 23',
        number_of_employees: 3,
        number_of_devices: 4,
        number_of_members: 200
    },
    {
        name: 'California Fitness',
        address: 'Cologne, Sweitz st. 23',
        number_of_employees: 1,
        number_of_devices: 2,
        number_of_members: 50
    },
    {
        name: 'Washington Fitness',
        address: 'Cologne, Sweitz st. 23',
        number_of_employees: 4,
        number_of_devices: 12,
        number_of_members: 980
    }
]

const LocationsList = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <div>
            <Container>
                <div className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Locations', path: '/locations' },
                        ]}
                    />
                </div>
                <div>
                <Link to="/locations/create">
                    <Button variant="contained" startIcon={<AddCircleIcon />}>
                        Add a location
                    </Button>
                </Link>
                </div>
            <Box sx={{ py: '6px' }} />
                <SimpleCard title="Locations">
            <Box width="100%" overflow="auto">
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Location name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Employees</TableCell>
                        <TableCell>Devices</TableCell>
                        <TableCell>Members</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Locations
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((location, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    <Link to='/locations/create/'>
                                        {location.name}
                                    </Link>
                                 </TableCell>
                                 <TableCell align="left">
                                    {location.address}
                                </TableCell>
                                <TableCell align="left">
                                    {location.number_of_employees}
                                </TableCell>
                                <TableCell>{location.number_of_devices}</TableCell>
                                <TableCell align="left">
                                    {location.number_of_members}
                                </TableCell>
                                <TableCell>
                                <IconButton>
                                    <Tooltip title="Edit">
                                        <CreateIcon />
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <Tooltip title="Delete">
                                        <DeleteIcon />
                                    </Tooltip>
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            {/* <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={subscribarList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Box>
                </ SimpleCard>
            </ Container>
        </div>
    )
}

export default LocationsList
