import React from 'react';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import {IFormData} from '../../interfaces';
import { PayType } from '../../enums';
import NDFLSwitch from './NDFLSwitch/NDFLSwitch';
import './PayForm.scss';
import PayAmountInput from './PayAmountInput/PayAmountInput';
import { normalizeAmount, formatAmount } from '../helpers';
import InfoPopover from '../InfoPopover';
import RadioButton from './RadioButton';

const PayForm: React.FC<InjectedFormProps<IFormData>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>

      <small className="form-caption form-text">Сумма</small>

      <div className="form-fields">

        <Field component={RadioButton} name="payType" label="Оклад за месяц" props={{ value: PayType.Monthly }} />

        <Field 
          component={RadioButton} 
          name="payType" 
          label="МРОТ" 
          props={{ 
            value: PayType.MROT, 
            info: <InfoPopover body="МРОТ - минимальный размер оплаты труда. Разный для разных регионов." /> 
          }} 
        />

        <Field component={RadioButton} name="payType" label="Оплата за день" props={{ value: PayType.PerDay }} />

        <Field component={RadioButton} name="payType" label="Оплата за час" props={{ value: PayType.PerHour }} />

        <Field component={NDFLSwitch} name="isNDFL" uncheckedLabel="Указать с НДФЛ" checkedLabel="Без НДФЛ" />

        <Field component={PayAmountInput} name="payAmount" normalize={normalizeAmount} format={formatAmount} />

      </div>

    </form>
  )
}

const PayReduxForm = reduxForm<IFormData>({
  form: 'pay',
})(PayForm);

export default PayReduxForm;