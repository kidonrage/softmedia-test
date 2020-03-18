import React from 'react';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';

type FormValuesType = {
  payType: string,
  payAmount: number
}

type InputPropsType = {
  label: string,
  value: string,
  meta: object,
  input: {
    value: string
  }
}

const PayForm: React.FC<InjectedFormProps<FormValuesType>> = ({handleSubmit}) => {

  const renderRadioButton = (props: InputPropsType) => {
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

  const renderPayInput = (props: InputPropsType) => {
    return (
      <div className="form-group">
        <label>
          <input type="number" className="form-control" {...props.input} /> 
          р.
        </label>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit}>

      <Field component={renderRadioButton} name="payType" label="Оклад за месяц" props={{ value: "option1" }} />

      <Field component={renderRadioButton} name="payType" label="МРОТ" props={{ value: "option2" }} />

      <Field component={renderRadioButton} name="payType" label="Оплата за день" props={{ value: "option3" }} />

      <Field component={renderRadioButton} name="payType" label="Оплата за час" props={{ value: "option4" }} />

      <Field component={renderPayInput} name="payAmount" />

    </form>
  )
}

const PayReduxForm = reduxForm<FormValuesType>({
  form: 'pay',
})(PayForm);

export default PayReduxForm;