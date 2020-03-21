import React, {useState} from 'react'
import Popover from '../Popover'
import InfoIcon from '../Icons/InfoIcon';
import CancelIcon from '../Icons/CancelIcon/CancelIcon';
import './InfoPopover.scss'

const InfoPopover: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false)

  const handleClick = () => {
    setIsFixed(prev => !prev)
  }

  return (
    <Popover className="info-popover" body="МРОТ - минимальный размер оплаты труда. Разный для разных регионов." preferPlace="below" isVisible={isFixed}>
      <div onClick={handleClick}>
        {isFixed ? <CancelIcon /> : <InfoIcon />}
      </div>
    </Popover>
  )
}

export default InfoPopover