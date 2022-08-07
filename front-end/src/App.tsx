import cx from 'classnames';

import Header from './Components/Header';
import MovieCarousel from './Components/MovieCarousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Slider from './Components/NetflixSlider'
import Item from './Components/NetflixSlider/Item'


import logo from './logo.svg';
import globalStyles from './styles/global-styles/bootstrap.min.module.scss';
import styles from './styles/App.module.scss';
import icons from './styles/global-styles/bootstrap-icons.module.scss';

import { movies } from './Data/data'

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <MovieCarousel />
      <h2>Latest and Trending</h2>
      <Slider activeSlide={null}>
        {movies.map(movie => (
          <Item movie={movie} key={movie.id}/>
        ))}
      </Slider>
      <h2>Moive</h2>
      <Slider activeSlide={null}>
        {movies.map(movie => (
          <Item movie={movie} key={movie.id}/>
        ))}
      </Slider>
      <h2>Web Series</h2>
      <Slider activeSlide={null}>
        {movies.map(movie => (
          <Item movie={movie} key={movie.id}/>
        ))}
      </Slider>

    </div>
  );
}



export default App;
