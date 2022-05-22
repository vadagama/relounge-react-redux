import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const ProductsApp = Loadable(lazy(() => import('./ProductsApp')))

const ProductsRoutes = [
    {
        path: '/products',
        element: <ProductsApp />,
        auth: authRoles.admin,
    },
]

export default ProductsRoutes
