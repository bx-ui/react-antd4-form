import React from 'react';
import FieldContext from './FormContext'

const Form = ({ children, form, onFinish, onFinishFailed }) => {
  const formInstance = { form }

  // 触发回调函数的更新
  formInstance.form.setCallbacks({ onFinish, onFinishFailed })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      formInstance.form.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}

export default Form