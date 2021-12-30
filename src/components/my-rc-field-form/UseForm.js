import React from 'react';

class FormStore {
  constructor() {
    this.state = {
      username: '',
      password: ''
    };
    // 收集的field实例
    this.fieldEntities = [];
    // 回调函数的集合
    this.callbacks = {}
  }
  setCallbacks = (payload) => {
    console.log(232323);
    this.callbacks = {
      ...this.callbacks,
      ...payload
    }
  }
  // 收集field实例
  registerFieldEntity = (field) => {
    this.fieldEntities.push(field)
    // 在内部进行卸载
    return () => {
      this.fieldEntities = this.fieldEntities.filter(s => s !== field)
      // 删除对应的属性
      delete this.state[field.props.name]
    }
  }
  setFieldsValue = (payload) => {
    this.state = { ...this.state, ...payload }
    // 进行更新
    this.fieldEntities.forEach(entity => {
      Object.keys(payload).forEach(key => {
        if (entity.props.name === key) {
          entity.onStoreChange()
        }
      })
    })
  }
  getFieldsValue = () => {
    return { ...this.state }
  }
  getFieldValue = (key) => {
    return this.state[key]
  }
  validate = () => {
    let errs = []
    // TODO validate
    return errs
  }
  submit = () => {
    // 校验
    const err = this.validate()
    if (err.length > 0) {
      // 有错误
      this.callbacks.onFinishFailed(err, this.getFieldsValue())
    } else {
      // 正确
      this.callbacks.onFinish()
    }
  }
  // store仓库的控制权
  getForm () {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      registerFieldEntity: this.registerFieldEntity,
      setCallbacks: this.setCallbacks,
      submit: this.submit
    }
  }
}

// 我需要一个值来存储store，能保证在组件卸载前的任何一个生命周期，这个值只想的都是同一个对象
// 思路：我把这个值存放道虚拟节点中(fiber)
// useRef ==> 返回的就是取自fiber上的一个节点
function useForm () {
  const formRef = React.useRef()
  if (!formRef.current) {
    const formStore = new FormStore()
    // 上面保存的是数据仓库的控制权
    formRef.current = formStore.getForm()
  }
  return [formRef.current]
}


export default useForm