import React from 'react';
import IconArrowDown from '../Icons/IconArrowDown'
import './ShowDetailsButton.scss'

interface IShowDetailsButton {
  onClick: React.MouseEventHandler
}

const ShowDetailsButton: React.FunctionComponent<IShowDetailsButton>  = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
