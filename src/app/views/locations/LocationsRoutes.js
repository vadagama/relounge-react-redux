import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const LocationsApp = Loadable(lazy(() => import('./LocationsApp')))
const LocationsList = Loadable(lazy(() => import('./LocationsList')))
const AddEmployee = Loadable(lazy(() => import('./AddEmployee')))
const WorkingHours = Loadable(lazy(() => import('./WorkingHours')))

const LocationsRoutes = [
    {
        path: '/locations',
        element: <LocationsList />,
        auth: authRoles.admin,
    },
    {
        path: '/locations/create',
        element: <LocationsApp />,
        auth: authRoles.admin,
    },
]

export default LocationsRoutes
