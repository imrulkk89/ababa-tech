import React from 'react'
import './SliderWrapper.scss'


interface ISliderWrapperProps {
  children: React.ReactNode
}

const SliderWrapper: React.FunctionComponent<ISliderWrapperProps> = ({ children }) => (
  <div className="slider-wrapper">
    {children}
  </div>
);

export default SliderWrapper;
