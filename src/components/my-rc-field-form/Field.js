import React, { Fragment } from 'react';
import FieldContext from './FormContext'

export default class Field extends React.Component {

  static contextType = FieldContext

  onStoreChange = () => {
    this.forceUpdate()
  }

  componentDidMount () {
    // 在这里进行收集
    this.context.form.registerFieldEntity(this)
  }

  getControlled = () => {
    const { form } = this.context
    const { name } = this.props
    return {
      value: form.getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value
        form.setFieldsValue({ [name]: newValue })
        console.log(form);
      }
    }
  }

  render () {
    const { children } = this.props
    console.log('render');
    return (
      <Fragment>
        {
          React.cloneElement(children, this.getControlled())
        }
      </Fragment>
    )
  }
}