import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const SettingsApp = Loadable(lazy(() => import('./SettingsApp')))

const SettingsRoutes = [
    {
        path: '/settings',
        element: <SettingsApp />,
        auth: authRoles.admin,
    },
]

export default SettingsRoutes
