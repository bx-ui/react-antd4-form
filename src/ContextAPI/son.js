import React, { useContext } from 'react';
import { ThemeContext, UserContext } from './context';

const Son = () => {

  const theme = useContext(ThemeContext)
  const user = useContext(UserContext)

  return (
    <div className={theme.color}>
      son -- { user.username }
    </div>
  )
}

export default Son