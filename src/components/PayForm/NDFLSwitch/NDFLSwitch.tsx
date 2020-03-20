import React from 'react'
import './switcher.scss'
import { WrappedFieldMetaProps } from 'redux-form'

type SwitchPropsType = {
  checkedLabel: string,
  uncheckedLabel: string,
  meta: WrappedFieldMetaProps,
  input: {
    value: boolean
  }
}

const NDFLSwitch: React.FC<SwitchPropsType> = ({checkedLabel, uncheckedLabel, meta, input, ...rest}) => {
  const {value, ...restInput} = input;

  return (
    <div className="form-switch">
      <input type="checkbox" id="ndfl-switch" {...rest} checked={value} {...restInput} />
      <label className="switch order-2" htmlFor="ndfl-switch"></label>

      <span className="form-unchecked-label order-1">{checkedLabel}</span>
      <span className="form-checked-label order-3">{uncheckedLabel}</span>
    </div>
  )
}

export default NDFLSwitch