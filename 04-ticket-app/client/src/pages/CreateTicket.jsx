import { DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { Button } from 'antd/lib/radio';
import { useState } from 'react';
import { useContext } from 'react';
import { SocketContext } from '../context/socketContext';

const { Title, Text } = Typography;

export const CreateTicket = () => {
  const { socket } = useContext(SocketContext);

  const [ticket, setTicket] = useState(null);

  const createTicket = () => {
    socket.emit('create-ticket', null, (ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align='center'>
          <Title>Create new Ticket</Title>
          <Button
            type='primary'
            shape='round'
            icon={<DownloadOutlined />}
            size='large'
            onClick={createTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6}>
            <Text level={2}>Number</Text>
            <br />
            <Text type='success' style={{ fontSize: 55 }}>
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
