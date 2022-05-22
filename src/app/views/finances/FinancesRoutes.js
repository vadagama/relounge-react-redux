import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const FinancesApp = Loadable(lazy(() => import('./FinancesApp')))

const FinancesRoutes = [
    {
        path: '/finances',
        element: <FinancesApp />,
        auth: authRoles.admin,
    },
]

export default FinancesRoutes
