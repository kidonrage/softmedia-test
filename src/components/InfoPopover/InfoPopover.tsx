import React, {useState} from 'react'
import InfoIcon from '../Icons/InfoIcon'
import CancelIcon from '../Icons/CancelIcon/CancelIcon'
import { Manager, Reference, Popper } from 'react-popper'
import './InfoPopover.scss'

type InfoPopoverProps = {
  body: string
}

const InfoPopover: React.FC<InfoPopoverProps> = ({body}) => {
  const [isFixed, setIsFixed] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setIsFixed(prev => !prev)
    setisOpen(true)
  }

  const handleMouseOver = () => {
    if (isFixed) {
      return
    }

    setisOpen(true)
  }

  const handleMouseOut = () => {
    if (isFixed) {
      return
    }

    setisOpen(false)
  }

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div 
            className="info-popover-trigger" 
            ref={ref} 
            onClick={handleClick} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
          >
            {isFixed ? <CancelIcon /> : <InfoIcon />}
          </div>
        )}
      </Reference>
      {isOpen && (
        <Popper 
          placement="bottom-start"
        >
          {({ ref, style, placement, arrowProps }) => (
            <div 
              ref={ref} 
              style={{
                ...style, 
                top: Number(style.top) + 15,
                left: Number(style.left) + 10,
              }} 
              className="info-popover"
              data-placement={placement}
            >
              {body}
              <div 
                ref={arrowProps.ref} 
                className="arrow" 
                style={{
                  ...arrowProps.style, 
                  left: Number(arrowProps.style.left) - 3
                }} 
              />
            </div>
          )}
        </Popper>
      )}
    </Manager>
  )
}

export default InfoPopover