import React from 'react';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import PayForm from '../PayForm';
import Result from '../Result';
import { IFormData } from '../../interfaces';
import { PayType } from '../../enums';
import { AppStateType } from '../../redux/redux-store';

const AppForm: React.SFC<MapStatePropsType> = (props) => {

  const {formStates} = props;

  const initialValues: IFormData = {
    payType: PayType.Monthly,
    isNDFL: true,
    payAmount: 0
  }

  console.log(props)

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <PayForm 
            initialValues={initialValues}
            onSubmit={(values) => console.log("Hello", values)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {formStates && formStates.payType === PayType.Monthly && (<Result />)}
        </div>
      </div>
    </div>
  )
}

type MapStatePropsType = {
  formStates?: IFormData
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  const formData = getFormValues('pay')(state) as IFormData | undefined

  return {
    formStates: formData
  }
}


export default connect(mapStateToProps)(AppForm)