import React from 'react';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';

type FormValuesType = {
  selectedPayType: string,
  isNDFL: boolean,
  payAmount: number
}

const PayForm: React.FC<InjectedFormProps<FormValuesType>> = ({handleSubmit}) => {
  const onSubmit = () => {
    console.log("onSubmit")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>
        <Field name="payType" component="input" type="radio" value="option1"/>
        Оклад за месяц
      </label>
      
      <label>
        <Field name="payType" component="input" type="radio" value="option2"/>
        МРОТ
      </label>

      <label>
        <Field name="payType" component="input" type="radio" value="option3"/>
        Оплата за день
      </label>

      <label>
        <Field name="payType" component="input" type="radio" value="option4"/>
        Оплата за час
      </label>

      <Field name="payAmount" component="input" type="text" />

    </form>
  )
}

const PayReduxForm = reduxForm<FormValuesType>({
  form: 'pay'
})(PayForm);

export default PayReduxForm;