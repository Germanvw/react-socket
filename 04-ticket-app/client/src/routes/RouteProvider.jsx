import { Layout, Menu } from 'antd';
import { globalRoutes, privateRroutes, publicRoutes, routes } from './routes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import { getUsuario } from '../helpers/getUsuario';

const { Sider, Content } = Layout;

export const RouteProvider = () => {
  const { dispatch, worker } = useContext(AuthContext);

  useEffect(() => {
    if (getUsuario().worker) {
      dispatch({
        type: 'login',
        payload: { worker: getUsuario().worker, office: getUsuario().office },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider collapsedWidth='0' breakpoint='md'>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            {routes.map(({ icon, name, path }, i) => (
              <Menu.Item key={i}>
                {icon}
                {name}
                <Link to={path} />
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route element={<PublicRoutes user={worker} />}>
                {publicRoutes.map(({ Component, path }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Route>
              <Route element={<PrivateRoutes user={worker} />}>
                {privateRroutes.map(({ Component, path }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Route>
              {globalRoutes.map(({ Component, path }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
