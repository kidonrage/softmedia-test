import React from 'react';
import {Field, reduxForm, InjectedFormProps, WrappedFieldMetaProps} from 'redux-form';
import {IFormData} from '../../interfaces';
import { PayType } from '../../enums';
import NDFLSwitch from './NDFLSwitch/NDFLSwitch';

type InputPropsType = {
  label: string,
  value: string,
  meta: WrappedFieldMetaProps,
  input: {
    value: string
  }
}

const renderRadioButton: React.FC<InputPropsType> = (props) => {
  const {label, input, meta, ...rest} = props;

  return (
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="radio" {...input} {...rest} checked={input.value === rest.value} />
        {label}
      </label>
    </div>
  )
}

const renderPayInput: React.FC<InputPropsType> = (props) => {
  return (
    <div className="form-group">
      <label>
        <input type="number" className="form-control" {...props.input} /> 
        р.
      </label>
    </div>
  )
}

const PayForm: React.FC<InjectedFormProps<IFormData>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>

      <Field component={renderRadioButton} name="payType" label="Оклад за месяц" props={{ value: PayType.Monthly }} />

      <Field component={renderRadioButton} name="payType" label="МРОТ" props={{ value: PayType.MROT }} />

      <Field component={renderRadioButton} name="payType" label="Оплата за день" props={{ value: PayType.PerDay }} />

      <Field component={renderRadioButton} name="payType" label="Оплата за час" props={{ value: PayType.PerHour }} />

      <NDFLSwitch />

      <Field component={renderPayInput} name="payAmount" />

    </form>
  )
}

const PayReduxForm = reduxForm<IFormData>({
  form: 'pay',
})(PayForm);

export default PayReduxForm;