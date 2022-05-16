import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const MembersList = Loadable(lazy(() => import('./MembersList')))
const MembersCreate = Loadable(lazy(() => import('./MembersCreate')))

const membersRoutes = [
    {
        path: '/members',
        element: <MembersList />,
        auth: authRoles.admin,
    },
    {
        path: '/members/create',
        element: <MembersCreate />,
        auth: authRoles.admin,
    },
]

export default membersRoutes
