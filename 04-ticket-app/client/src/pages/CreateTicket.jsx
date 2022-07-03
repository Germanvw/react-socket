import { DownloadOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { Button } from 'antd/lib/radio';

const { Title, Text } = Typography;

export const CreateTicket = () => {
  const createTicket = () => {};

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
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6}>
          <Text level={2}>Number</Text>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
