import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { SocketContext } from '../context/socketContext';
import { getUsuario } from '../helpers/getUsuario';

const { Title, Text } = Typography;

export const HomePage = () => {
  const { worker, office, dispatch } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const [ticket, setTicket] = useState(null);

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const nextTicket = () => {
    socket.emit('next-ticket', { worker, office }, (ticket) => {
      setTicket(ticket);
    });
  };

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
      {ticket && (
        <Row>
          <Col span={4}>
            <Text>Attending ticket: </Text>
            <Text style={{ fontSize: 30 }} type='danger'>
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align='right'>
          <Button onClick={() => nextTicket()} shape='round' type='primary'>
            <RightOutlined /> Next Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};
