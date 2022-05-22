import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import memberRoutes from 'app/views/members/MembersRoutes'
import acquisitionsRoutes from 'app/views/acquisition/AcquisitionsRoutes'
import settingsRoutes from 'app/views/settings/SettingsRoutes'
import employeesRoutes from 'app/views/staff/EmployeesRoutes'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'
import locationsRoutes from 'app/views/locations/LocationsRoutes'
import appointmentsRoutes from 'app/views/appointments/AppointmentsRoutes'
import productsRoutes from 'app/views/products/ProductsRoutes'
import financesRoutes from 'app/views/finances/FinancesRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...dashboardRoutes, 
                       ...chartsRoute, 
                       ...materialRoutes, 
                       ...memberRoutes, 
                       ...acquisitionsRoutes,
                       ...locationsRoutes,
                       ...employeesRoutes,
                       ...appointmentsRoutes,
                       ...productsRoutes,
                       ...settingsRoutes,
                       ...financesRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="dashboard/default" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
