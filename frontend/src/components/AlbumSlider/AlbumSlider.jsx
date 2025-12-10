import React, { useRef } from 'react';
import rightBtn from '../../assets/images/right_button_icon.png';
import leftBtn from '../../assets/images/left_button_icon.png';

const albumList = [
  {
    id: 1,
    title: 'Dark Side Of The Moon',
    artist: 'Pink Floyd',
    image: 'https://i.scdn.co/image/ab67616d0000b273db216ca805faf5fe35df4ee6',
  },
  {
    id: 2,
    title: 'Nirvana',
    artist: 'Nevermind',
    image:
      'https://m.media-amazon.com/images/I/61ZhsEYnSdL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    title: 'Metallica',
    artist: 'The Black Album',
    image:
      'https://www.excelsior.com.mx/800x600/filters:format(webp):quality(75)/media/pictures/2016/08/11/1500102.jpg',
  },
  {
    id: 4,
    title: 'Album 4 title',
    artist: 'Artist 4',
    image: null,
  },
  {
    id: 5,
    title: 'Album 5 title',
    artist: 'Artist 5',
    image: null,
  },
  {
    id: 6,
    title: 'Album 6 title',
    artist: 'Artist 6',
    image: null,
  },
  {
    id: 7,
    title: 'Album 7 title',
    artist: 'Artist 7',
    image: null,
  },
  {
    id: 8,
    title: 'Album 8 title',
    artist: 'Artist 8',
    image: null,
  },
  {
    id: 9,
    title: 'Album 9 title',
    artist: 'Artist 9',
    image: null,
  },
];

export const AlbumSlider = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const scrollByCard = (direction) => {
    if (!sliderRef.current || !cardRef.current) return;
    const cardWidth = cardRef.current.offsetWidth;
    const styles = window.getComputedStyle(sliderRef.current);
    const gap = parseInt(styles.gap) || 0;

    const totalSlide = cardWidth + gap;

    sliderRef.current.scrollBy({
      left: direction * totalSlide,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => scrollByCard(1);
  const scrollLeft = () => scrollByCard(-1);

  return (
    <div className="albums">
      <button type="button" className="albums__btn" onClick={scrollLeft}>
        <img
          className="albums__btn-left"
          src={leftBtn}
          alt="Left scroll button"
        />
      </button>

      <div className="albums__container" ref={sliderRef}>
        {albumList.map((album, index) => (
          <div
            key={album.id}
            className="album"
            ref={index === 0 ? cardRef : null}
          >
            <img className="album__image" src={album.image} alt={album.title} />
            <h3 className="album__title">{album.title}</h3>
            <p className="album__artist">{album.artist}</p>
          </div>
        ))}
      </div>

      <button type="button" className="albums__btn" onClick={scrollRight}>
        <img
          className="albums__btn-right"
          src={rightBtn}
          alt="Right scroll button"
        />
      </button>
    </div>
  );
};
