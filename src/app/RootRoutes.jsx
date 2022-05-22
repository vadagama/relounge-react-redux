import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'
import membersRoutes from './views/members/MembersRoutes'
import AcquisitionsRoutes from './views/acquisition/AcquisitionsRoutes'
import SettingsRoutes from './views/settings/SettingsRoutes'
import AppointmentsRoutes from './views/appointments/AppointmentsRoutes'
import ProductsRoutes from './views/products/ProductsRoutes'
import FinancesRoutes from './views/finances/FinancesRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...materialRoutes,
    ...chartsRoute,
    ...redirectRoute,
    ...errorRoute,
    ...membersRoutes,
    ...AcquisitionsRoutes,
    ...AppointmentsRoutes,
    ...SettingsRoutes,
    ...ProductsRoutes,
    ...FinancesRoutes,
]

export default routes
