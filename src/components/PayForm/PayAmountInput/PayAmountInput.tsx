import React from 'react';
import { InputPropsType } from '../../../types';
import { connect,  } from 'react-redux';
import { PayType } from '../../../enums';
import { getFormValues } from 'redux-form';
import { AppStateType } from '../../../redux/redux-store';
import { IFormData } from '../../../interfaces';

const PayAmountInput: React.FC<MapStatePropsType & InputPropsType> = ({payType, input, ...props}) => {
  let measure = ""
  
  switch (payType) {
    case PayType.PerDay:
      measure = "в день"
      break
    case PayType.PerHour:
      measure = "в час"
      break
    default: 
      break;
  }

  return (
    <div className="form-group form-group-inline">
      <input type="text" id={input.name} maxLength={10} className="form-control" {...input} /> 
      <label htmlFor={input.name}>{`₽ ${measure}`}</label>
    </div>
  )
}

type MapStatePropsType = {
  payType?: PayType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  const formData = getFormValues('pay')(state) as IFormData | undefined

  return {
    payType: formData?.payType
  }
}


export default connect(mapStateToProps)(PayAmountInput);