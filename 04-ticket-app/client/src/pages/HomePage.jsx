import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;

export const HomePage = () => {
  const logout = () => {};
  const nextTicket = () => {};

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Nombre</Title>
          <Text>Working at office: </Text>
          <Text type='success'>2</Text>
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
