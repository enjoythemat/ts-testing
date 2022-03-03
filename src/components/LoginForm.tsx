import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const LoginForm: FC = () => {
  const { isLoading, error } = useTypedSelector(state => state.auth)
  const { login } = useActions()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    login(username, password)
  }

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
    >
      {error && <div style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
      <Form.Item
        label="Имя"
        name="username"
        rules={[rules.required('Пожалуйста введите имя пользователя!')]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста введите пароль!')]}
      >
        <Input
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
