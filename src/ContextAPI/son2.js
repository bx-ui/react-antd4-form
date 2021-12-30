import React from 'react';
import { ThemeContext } from './context';

export default class Son2 extends React.Component {

  // * 不能接受多个context进行传值

  static contextType = ThemeContext

  render() {
    return (
      <div className={this.context.color}>
        Son2
      </div>
    )
  }
}