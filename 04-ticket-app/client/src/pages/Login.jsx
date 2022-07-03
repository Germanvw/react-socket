import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getUsuario } from '../helpers/getUsuario';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

export const Login = () => {
  const navigate = useNavigate();

  const [user] = useState({
    office: getUsuario()?.office,
    worker: getUsuario()?.worker,
  });

  const onFinish = ({ worker, office }) => {
    console.log(worker, office);
    localStorage.setItem('worker', worker);
    localStorage.setItem('office', office);
    navigate('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (user?.office && user?.worker) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (user?.office || user?.worker) <></>;

  return (
    <>
      <Title level={2}>Log in</Title>
      <Text>Submit your Name and Office Number.</Text>
      <Divider />
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Worker'
          name='worker'
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Office'
          name='office'
          rules={[
            {
              required: true,
              message: 'Please input your Office Number!',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit' shape='round'>
            <SaveOutlined />
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
