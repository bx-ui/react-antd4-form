import React from 'react';
import { UserContext, ThemeContext } from './context';

export default class Son3 extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {
            theme => <div className={theme.color}>
              son3
              {
                <UserContext.Consumer>
                  {
                    user => <span>{user.username}</span>
                  }
                </UserContext.Consumer>
              }
            </div>
          }
        </ThemeContext.Consumer>
      </div>
    )
  }
}