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
    TablePagination
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProductsApp = () => {

    const Container = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px',
        },
        '& .breadcrumb': {
            marginBottom: '10px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '16px',
            },
        },
    }))

    return (
        <Container>
        <div className="breadcrumb">
            <Breadcrumb
                 routeSegments={[
                    { name: 'Products', path: '/products' },
                ]}
            />
        </div>
        <Box sx={{ py: '10px' }} />
                <SimpleCard title="List of products">
                </SimpleCard>
    </Container>
    )
}

export default ProductsApp
