import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../context/socketContext';
import { getTickets } from '../helpers/getTickets';

const { Title, Text } = Typography;

export const Queue = () => {
  const { socket } = useContext(SocketContext);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    socket.on('ticket-assigned', (assigned) => {
      setQueue(assigned);
    });

    return () => {
      socket.off('ticket-assigned');
    };
  }, [socket]);

  useEffect(() => {
    getTickets().then(({ list }) => setQueue(list));
  }, []);

  return (
    <>
      <Title level={1}>Attending Ticket: </Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={queue.slice(0, 3)}
            renderItem={({ worker, office, id, number }) => (
              <List.Item key={id}>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'>{worker}</Tag>,
                    <Tag color='magenta'>Office: {office}</Tag>,
                  ]}
                >
                  <Title>Number: {number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={queue.slice(3)}
            renderItem={({ worker, office, id, number }) => (
              <List.Item key={id}>
                <List.Item.Meta
                  title={`Ticket Number: ${number}`}
                  description={
                    <>
                      <Text type='secondary'>At office: </Text>
                      <Tag color='magenta'>{office}</Tag>
                      <Text type='secondary'>Worker: </Text>
                      <Tag color='magenta'>{worker}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
