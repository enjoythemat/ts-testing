import React from 'react'
import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const NavBar = () => {
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()
  const navigate = useNavigate()

  return (
    <Layout.Header>
      {isAuth
        ?
        <>
          <Row justify="end">
            <div style={{color: 'white', marginRight: '1rem'}}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key="1" onClick={logout}>Выйти</Menu.Item>
            </Menu>
          </Row>
        </>
        :
        <Row justify="end">
          <div style={{color: 'white', marginRight: '1rem'}}>Гость</div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="1" onClick={() => navigate(RouteNames.LOGIN)}>Войти</Menu.Item>
          </Menu>
        </Row>
      }
    </Layout.Header>
  )
}

export default NavBar
