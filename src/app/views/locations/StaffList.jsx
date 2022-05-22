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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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

const Employees= [
    {
        name: 'New York Fitness',
        number_of_employees: 3,
        number_of_devices: 4,
        number_of_members: 200
    },
    {
        name: 'California Fitness',
        number_of_employees: 1,
        number_of_devices: 2,
        number_of_members: 50
    },
    {
        name: 'Washington Fitness',
        number_of_employees: 4,
        number_of_devices: 12,
        number_of_members: 980
    }
]

const EmployeesSearchList= [
    {
        name: 'New York Fitness',
        number_of_employees: 3,
        number_of_devices: 4,
        number_of_members: 200
    },
    {
        name: 'California Fitness',
        number_of_employees: 1,
        number_of_devices: 2,
        number_of_members: 50
    },
    {
        name: 'Washington Fitness',
        number_of_employees: 4,
        number_of_devices: 12,
        number_of_members: 980
    }
]

const StaffList = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [open, setOpen] = React.useState(false);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ py: '10px' }} />
                <div>
                    <Button  onClick={handleClickOpen} variant="contained" startIcon={<AddCircleIcon />}>
                        Add an employee
                    </Button>
                </div>
            <Box sx={{ py: '6px' }} />
                <SimpleCard title="Locations">
            <Box width="100%" overflow="auto">
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Location name</TableCell>
                        <TableCell>Number of employees</TableCell>
                        <TableCell>Number of devices</TableCell>
                        <TableCell>Number of members</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Employees
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((employee, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    <Link to='/locations/create/'>
                                        {employee.name}
                                    </Link>
                                 </TableCell>
                                <TableCell align="left">
                                    {employee.number_of_employees}
                                </TableCell>
                                <TableCell>{employee.number_of_devices}</TableCell>
                                <TableCell align="left">
                                    {employee.number_of_members}
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
        </Box>
                </ SimpleCard>
        </div>
    )
}

export default StaffList
