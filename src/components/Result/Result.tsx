import React from 'react';
import './Result.scss';
import { AppStateType } from '../../redux/redux-store';
import { getFormValues } from 'redux-form';
import { IFormData } from '../../interfaces';
import { connect } from 'react-redux';

const Result: React.FC<MapStatePropsType> = ({payAmount, isNDFL}) => {
  const NDFLfactor = 0.13

  let payOnHands: number = 0
  let NDFLAmount: number = 0
  let forEmployeeMonthly: number = 0

  if (payAmount) {
    NDFLAmount = payAmount * NDFLfactor
    payOnHands = isNDFL ? payAmount : payAmount - NDFLAmount
    forEmployeeMonthly = payOnHands + NDFLAmount
  }

  const roundDecimals: (number: number) => number = (number: number) => {
    return Math.round(number * 100) / 100
  }

  return (
    <div className="results-container">
      <ul>
        <li><b>{roundDecimals(payOnHands)} ₽</b> сотрудник будет получать на руки</li>
        <li><b>{roundDecimals(NDFLAmount)} ₽</b> НДФЛ, 13% от оклада</li>
        <li><b>{roundDecimals(forEmployeeMonthly)} ₽</b> за сотрудника в месяц</li>
      </ul>
    </div>
  )
}

type MapStatePropsType = {
  payAmount?: number,
  isNDFL?: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  const formData = getFormValues('pay')(state) as IFormData | undefined

  return {
    payAmount: formData?.payAmount,
    isNDFL: formData?.isNDFL
  }
}

export default connect(mapStateToProps)(Result)