import React, { useState } from 'react';
import { ThemeContext, UserContext } from './context'
import { Button } from 'antd'
import Son from './son'
import Son2 from './son2';
import Son3 from './son3';

const ContextAPI = () => {

  const [theme, setTheme] = useState({ color: 'red' })
  const [ user, setUser ] = useState({ username: '小明' })

  const changeTheme = () => {
    setTheme({
      color: theme.color === 'red' ? 'blue' : 'red'
    })
  }

  const changeUser = () => {
    setUser({
      username: user.username === '小明' ? '小红' : '小明'
    })
  }

  return (
    <>
      <Button type="primary" onClick={changeTheme}>Change Theme</Button>
      <Button type="primary" onClick={changeUser}>Change User</Button>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <Son />
          <Son2 />
          <Son3 />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default ContextAPI