import React, {useState} from 'react'
import ReactPopover, { PopoverPlace } from 'react-popover';

type PopoverProps = {
  body: string,
  preferPlace: PopoverPlace,
  isVisible?: boolean,
  className?: string
}

const Popover: React.FC<PopoverProps> = ({body, isVisible, className="", preferPlace = "below", children, ...props}) => {
  const [isOpened, setIsOpened] = useState(false)

  const handleMouseEnter = () => setIsOpened(true)
  const handleMouseLeave = () => setIsOpened(false)

  const popoverBody = <div className={className} >{body}</div>;
  
  return (
    <ReactPopover
      {...props}
      body={popoverBody}
      isOpen={isVisible || isOpened}
      // tipSize={0.01}
      style={{ zIndex: 12000 }}
      preferPlace={preferPlace}
    >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </ReactPopover>
  );
}

export default Popover