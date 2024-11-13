import config from '~/config';

import Dashboard from '~/pages/Dashboard';
import User from '~/pages/User';
import Category from '~/pages/Category';
import Course from '~/pages/Course';
import Lesson from '~/pages/Lesson';
import Register from '~/pages/Register';
import Invoice from '~/pages/Invoice';
import Receipt from '~/pages/Receipt';

type RouteType = {
    path: string;
    component: React.FunctionComponent<any>;
    layout?: React.FunctionComponent<any> | null;
    children?: {
        path: string;
        component: React.FunctionComponent;
    }[];
};

const privateRoutes: RouteType[] = [
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.user, component: User },
    { path: config.routes.category, component: Category },
    { path: config.routes.course, component: Course },
    { path: config.routes.lesson, component: Lesson },
    { path: config.routes.register, component: Register },
    { path: config.routes.invoice, component: Invoice },
    { path: config.routes.receipt, component: Receipt, layout: null },
];

export { privateRoutes };
