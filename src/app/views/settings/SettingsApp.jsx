import React, { useState, useEffect } from 'react'
import { Divider, Tab, Tabs } from '@mui/material'
import { Breadcrumb, SimpleCard } from 'app/components'
import { styled } from '@mui/system'
import MembershipSettings from './MembershipSettings'
import CompanyDetails from './CompanyDetails'

const SettingsApp = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabChange = (e, value) => {
        setTabIndex(value)
    }

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

    const StyledTab = styled(Tab)(({ theme }) => ({
        textTransform: 'none',
    }))

    return (
        <Container>
        <div className="breadcrumb">
            <Breadcrumb
                 routeSegments={[
                    { name: 'Settings', path: '/settings' },
                ]}
            />
        </div>
        <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
        >
            {tabList.map((item, ind) => (
                <StyledTab
                    value={ind}
                    label={item}
                    key={ind}
                />
            ))}
        </Tabs>
        <Divider />

        {tabIndex === 0 && <CompanyDetails/>}
        {tabIndex === 1 && <MembershipSettings />}


    </Container>
    )
}

const tabList = ['Company Details', 'Membership']

export default SettingsApp
