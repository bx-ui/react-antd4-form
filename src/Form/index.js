import React from 'react';
import Form, { useForm, Field } from '../components/my-rc-field-form'
import { Input } from 'antd'

const ContentForm = () => {
  const [form] = useForm()
  console.log(form);

  const onFinish = () => {
    console.log('onFinish');
  }

  const onFinishFailed = () => {
    console.log('onFinishFailed');
  }

  return (
    <div style={{ width: '400px', padding: '80px' }}>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username">
          <Input placeholder="请输入用户名" />
        </Field>
        <Field name="password">
          <Input style={{ marginTop: '10px' }} placeholder="请输入密码" />
        </Field>
        <button type="submit">提交</button>
      </Form>
    </div>
  )
}

export default ContentForm