import { Layout, Menu } from 'antd';
import { routes } from './routes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Sider, Content } = Layout;

export const RouteProvider = () => {
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
              {routes.map(({ path, Component }, i) => (
                <Route key={i} path={path} element={<Component />} />
              ))}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
