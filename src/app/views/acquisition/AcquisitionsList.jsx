import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
    Badge,
    Link,
    Button,
    TablePagination,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
        name: 'john doe',
        next_recheck: '22 july, 2022',
        trainings: '4 / 10',
        well_being: 'good',
        company: 'BBR GMBH',
    },
    {
        name: 'kessy bryan',
        next_recheck: '05 july, 2022',
        trainings: '6 / 10',
        well_being: 'bad',
        company: 'AVK GmbH',
    },
    {
        name: 'nikita minin',
        next_recheck: '12 july, 2022',
        trainings: '2 / 10',
        well_being: 'average',
        company: 'AVK GmbH',
    }
]

const AcquisitionsList = () => {
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
                            { name: 'Acquisitions', path: '/acquisitions' },
                        ]}
                    />
                </div>
                <div>
                    <Button href="/acquisitions/create" variant="contained" startIcon={<AddCircleIcon />}>
                        Add an interested person
                    </Button>
            </div>
            <Box sx={{ py: '6px' }} />
                <SimpleCard title="Interested persons">
            <Box width="100%" overflow="auto">
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Trainings</TableCell>
                        <TableCell>Next Recheck</TableCell>
                        <TableCell>Well-being</TableCell>
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
                                    <Link href="#">
                                    {member.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    {member.company}
                                </TableCell>
                                <TableCell>{member.trainings}</TableCell>
                                <TableCell align="left">
                                    {member.next_recheck}
                                </TableCell>
                                <TableCell>{member.well_being}</TableCell>
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

export default AcquisitionsList
