import React from 'react';
import IconArrowDown from '../Icons/IconArrowDown'
import './SlideButton.scss'

interface ISliderButtonProps {
  onClick: React.MouseEventHandler,
  type: string
}

const SlideButton: React.FunctionComponent<ISliderButtonProps> = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default SlideButton;