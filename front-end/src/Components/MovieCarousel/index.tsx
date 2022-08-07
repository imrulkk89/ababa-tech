import * as React from 'react';
import { Carousel } from 'react-responsive-carousel'
import styles from './MovieCarousel.module.scss'


interface IMovieCarouselProps {
}

const MovieCarousel: React.FunctionComponent<IMovieCarouselProps> = (props) => {
    const imageList = [
        {
            id: 1, 
            path: 'images/aquaman.jpeg'
        },
        {
            id: 2, 
            path: 'images/avatar_2.png'
        },
        {
            id: 3, 
            path: 'images/dr_strange.jpeg'
        },
        {
            id: 4, 
            path: 'images/the_gray_man.jpeg'
        },
        {
            id: 5, 
            path: 'images/thor.jpeg'
        }
    ]
  return (
    <Carousel 
        autoPlay 
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={2000}
        >
        {imageList.map(image => <div key={image.id}>
            <img className={styles.carouselImg} alt='' src={image.path} />
        </div>)}
    </Carousel> 
  );
};

export default MovieCarousel;
