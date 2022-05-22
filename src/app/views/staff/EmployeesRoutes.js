import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const EmployeesList = Loadable(lazy(() => import('./EmployeesList')))
const EmployeeCreate = Loadable(lazy(() => import('./EmployeeCreate')))

const EmployeesRoutes = [
    {
        path: '/employees',
        element: <EmployeesList />,
        auth: authRoles.admin,
    },
    {
        path: '/employees/create',
        element: <EmployeeCreate />,
        auth: authRoles.admin,
    }
]

export default EmployeesRoutes
