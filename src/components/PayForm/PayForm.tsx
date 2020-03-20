import React from 'react';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import {IFormData} from '../../interfaces';
import { PayType } from '../../enums';
import NDFLSwitch from './NDFLSwitch/NDFLSwitch';
import './PayForm.scss';
import { InputPropsType } from '../../types';
import PayAmountInput from './PayAmountInput/PayAmountInput';

const renderRadioButton: React.FC<InputPropsType> = (props) => {
  const {label, input, meta, ...rest} = props;

  return (
    <div className="custom-control custom-radio">
      <input type="radio" className="custom-control-input" id={rest.value} {...input} {...rest} checked={input.value === rest.value}/>
      <label className="custom-control-label" htmlFor={rest.value}>
        <div className="custom-control-button"></div>
        {label}
      </label>
    </div>
  )
}

const PayForm: React.FC<InjectedFormProps<IFormData>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>

      <small className="form-caption form-text">Сумма</small>

      <div className="form-fields">

        <Field component={renderRadioButton} name="payType" label="Оклад за месяц" props={{ value: PayType.Monthly }} />

        <Field component={renderRadioButton} name="payType" label="МРОТ" props={{ value: PayType.MROT }} />

        <Field component={renderRadioButton} name="payType" label="Оплата за день" props={{ value: PayType.PerDay }} />

        <Field component={renderRadioButton} name="payType" label="Оплата за час" props={{ value: PayType.PerHour }} />

        <Field component={NDFLSwitch} name="isNDFL" uncheckedLabel="Указать с НДФЛ" checkedLabel="Без НДФЛ" />

        <Field component={PayAmountInput} name="payAmount" />

      </div>

    </form>
  )
}

const PayReduxForm = reduxForm<IFormData>({
  form: 'pay',
})(PayForm);

export default PayReduxForm;