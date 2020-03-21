import React from 'react'
import { InputPropsType } from '../../../types'
import './RadioButton.scss'

type RadioButtonProps = {
  info?: React.Component
}

const RadioButton: React.FC<InputPropsType & RadioButtonProps> = ({label, input, meta, info, ...rest}) => {
  return (
    <div className="custom-control custom-radio">
      <div className="flex-container">
        <div>
          <input 
            type="radio" 
            className="custom-control-input" 
            id={rest.value} 
            checked={input.value === rest.value}
            {...input} 
            {...rest} 
          />
          <label className="custom-control-label" htmlFor={rest.value}>
            <div className="custom-control-button"></div>
            {label}
          </label>
        </div>
        <div className="info-container">
          {info}
        </div>
      </div>
    </div>
  )
}

export default RadioButton