import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AppointmentsApp = Loadable(lazy(() => import('./AppointmentsApp')))

const AppointmentsRoutes = [
    {
        path: '/appointments',
        element: <AppointmentsApp />,
        auth: authRoles.admin,
    },
]

export default AppointmentsRoutes
