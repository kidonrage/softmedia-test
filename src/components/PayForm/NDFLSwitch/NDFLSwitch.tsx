import React from 'react'
import './switcher.scss'

const NDFLSwitch: React.FC = () => {
  return (
    <div className="form-switch">
      <input type="checkbox" name="ndfl-switch" id="ndfl-switch" />
      <label className="switch order-2" htmlFor="ndfl-switch"></label>

      <span className="form-unchecked-label order-1">Указать с НДФЛ</span>
      <span className="form-checked-label order-3">Без НДФЛ</span>
    </div>
  )
}

export default NDFLSwitch