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

const ProductsList = () => {


    return (
        <div>
        <Box sx={{ py: '10px' }} />
        <SimpleCard title="Products List">
        Products List
       </SimpleCard>
    </div>
    )
}

export default ProductsList
