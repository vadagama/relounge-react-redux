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
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom'

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

const membersList = [
    {
        avatar: 'https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg',
        name: 'John Doe',
        competences: ['Trainer', 'Consultant', 'Sales'],
    },
    {
        avatar: 'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
        name: 'Kessy Bryan',
        competences: ['Sales'],
    },
    {
        avatar: 'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg',
        name: 'Nikа Mininа',
        competences: ['Trainer'],
    }
]

const StaffList = () => {
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
                            { name: 'Members', path: '/members' },
                        ]}
                    />
                </div>
                <div>
                <Link to="/employees/create">
                    <Button variant="contained" startIcon={<AddCircleIcon />}>
                        Add an employee
                    </Button>
                </Link>
                </div>
            <Box sx={{ py: '6px' }} />
                <SimpleCard title="Members">
            <Box width="100%" overflow="auto">
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell  style={{ width: 80 }}></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Competences</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {membersList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((member, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                <Avatar alt="Remy Sharp" src={member.avatar} />
                                 </TableCell>
                                <TableCell align="left">
                                    {member.name}
                                 </TableCell>
                                <TableCell align="left">
                                {member.competences.map((competence) => (
                                    <div>{competence}</div>
                                ))}
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
            </ Container>
        </div>
    )
}

export default StaffList
