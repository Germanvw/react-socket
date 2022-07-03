import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuario } from '../helpers/getUsuario';

const { Title, Text } = Typography;

export const HomePage = () => {
  const navigate = useNavigate();

  const [user] = useState({
    office: getUsuario()?.office,
    worker: getUsuario()?.worker,
  });

  const logout = () => {
    localStorage.removeItem('worker');
    localStorage.removeItem('office');
    navigate('/login');
  };
  const nextTicket = () => {};

  if (!user?.office || !user?.worker) navigate('/login');

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{getUsuario()?.worker}</Title>
          <Text>Working at office: </Text>
          <Text type='success'>{getUsuario()?.office}</Text>
        </Col>
        <Col span={4} align='right'>
          <Button shape='round' type='danger' onClick={logout}>
            <CloseCircleOutlined /> Leave
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={4}>
          <Text>Attending ticket: </Text>
          <Text style={{ fontSize: 30 }} type='danger'>
            4
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align='right'>
          <Button onClick={nextTicket()} shape='round' type='primary'>
            <RightOutlined /> Next Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};
