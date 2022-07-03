import { DownloadOutlined } from '@ant-design/icons';
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { Button } from 'antd/lib/radio';

const { Title, Text } = Typography;

export const Queue = () => {
  const data = [
    {
      ticketNo: 33,
      escritorio: 3,
      agente: 'Fernando Herrera',
    },
    {
      ticketNo: 34,
      escritorio: 4,
      agente: 'Melissa Flores',
    },
    {
      ticketNo: 35,
      escritorio: 5,
      agente: 'Carlos Castro',
    },
    {
      ticketNo: 36,
      escritorio: 3,
      agente: 'Fernando Herrera',
    },
    {
      ticketNo: 37,
      escritorio: 3,
      agente: 'Fernando Herrera',
    },
    {
      ticketNo: 38,
      escritorio: 2,
      agente: 'Melissa Flores',
    },
    {
      ticketNo: 39,
      escritorio: 5,
      agente: 'Carlos Castro',
    },
  ];
  return (
    <>
      <Title level={1}>Attending Client: </Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={({ ticketNo, agente, escritorio }) => (
              <List.Item key={ticketNo}>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'>{agente}</Tag>,
                    <Tag color='magenta'>Office: {escritorio}</Tag>,
                  ]}
                >
                  <Title>Number: {ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={({ ticketNo, agente, escritorio }) => (
              <List.Item key={ticketNo}>
                <List.Item.Meta
                  title={`Ticket Number: ${ticketNo}`}
                  description={
                    <>
                      <Text type='secondary'>At office: </Text>
                      <Tag color='magenta'>{escritorio}</Tag>
                      <Text type='secondary'>Worker: </Text>
                      <Tag color='magenta'>{agente}</Tag>
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
