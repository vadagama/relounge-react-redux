import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="Trainings">
                <Small sx={{ color: secondary }}>Today</Small>
                <Box sx={{ pt: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Theresa Webb"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Savannah Nguyen"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Marvin McKinney"
                />

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Yesterday</Small>
                <Box sx={{ py: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Cameron Williamson"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Jane Cooper"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Theresa Webb"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
