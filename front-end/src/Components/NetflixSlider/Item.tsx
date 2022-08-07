import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'
import styles from '../../styles/global-styles/bootstrap.min.module.scss'

interface IMovie{
  id: number,
  image: string,
  imageBg: string,
  title: string,
  description?: string
}
interface IItemProps {
  movie: IMovie
}

const Item: React.FunctionComponent<IItemProps>  = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
          <div
            ref={elementRef}
            className={cx('item', {
              'item--open': isActive,
            })}
          >
            <img src={movie.image} alt={movie.title} />
            <div className={cx('overlay', styles['d-flex'], styles['align-item-center'], styles['justify-content-center'])}>
              Add to &#10085 Favorites
            </div>
            <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
            {isActive && <Mark />}
           
          </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
