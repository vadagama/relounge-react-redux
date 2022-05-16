import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AcquisitionsList = Loadable(lazy(() => import('./AcquisitionsList')))

const AcquisitionsRoutes = [
    {
        path: '/acquisitions',
        element: <AcquisitionsList />,
        auth: authRoles.admin,
    },
]

export default AcquisitionsRoutes
