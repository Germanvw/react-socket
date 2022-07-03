import { HomePage } from '../pages/HomePage';

import {
  HomeOutlined,
  UserOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
import { Login } from '../pages/Login';
import { Queue } from '../pages/Queue';
import { CreateTicket } from '../pages/CreateTicket';

export const routes = [
  {
    path: '/',
    name: 'Home',
    Component: HomePage,
    icon: <HomeOutlined />,
  },
  {
    path: '/login',
    name: 'Login',
    Component: Login,
    icon: <UserOutlined />,
  },
  {
    path: '/create',
    name: 'Create Ticket',
    Component: CreateTicket,
    icon: <FileAddOutlined />,
  },
  {
    path: '/queue',
    name: 'Queue',
    Component: Queue,
    icon: <FieldTimeOutlined />,
  },
];

export const privateRroutes = [
  {
    path: '/',
    name: 'Home',
    Component: HomePage,
    icon: <HomeOutlined />,
  },
  {
    path: '/queue',
    name: 'Queue',
    Component: Queue,
    icon: <FieldTimeOutlined />,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    Component: Login,
    icon: <UserOutlined />,
  },
  {
    path: '/create',
    name: 'Create Ticket',
    Component: CreateTicket,
    icon: <FileAddOutlined />,
  },
];
