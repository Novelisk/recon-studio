import React, { useRef, useEffect, useCallback } from 'react';
import { SocialsPopup } from '../SocialsPopup/SocialsPopup';
import rightBtn from '../../assets/images/icon-arrow-right.svg';
import leftBtn from '../../assets/images/icon-arrow-left.svg';
import albumList from '../../data/albumList';

export const AlbumSlider = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);

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

  const scrollRight = useCallback(() => {
    if (!sliderRef.current || !cardRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    if (isAtEnd) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollByCard(1);
    }
  }, []);

  const scrollLeft = () => scrollByCard(-1);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    intervalRef.current = setInterval(scrollRight, 3000);
  }, [scrollRight, stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <div
      className="album-slider"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <button type="button" className="album-slider__btn" onClick={scrollLeft}>
        <img
          className="album-slider__btn-left"
          src={leftBtn}
          alt="Left scroll button"
        />
      </button>

      <div className="album-slider__container" ref={sliderRef}>
        {albumList.map((album, index) => (
          <div
            key={album.id}
            className="album"
            ref={index === 0 ? cardRef : null}
          >
            <img
              className="album-slider__image"
              src={album.image}
              alt={album.title}
            />
            <h3 className="album-slider__title">{album.title}</h3>
            <p className="album-slider__artist">{album.artist}</p>

            <SocialsPopup links={album.links} />
          </div>
        ))}
      </div>

      <button type="button" className="album-slider__btn" onClick={scrollRight}>
        <img
          className="album-slider__btn-right"
          src={rightBtn}
          alt="Right scroll button"
        />
      </button>

      <div className="album-slider__controls">
        <button
          type="button"
          className="album-slider__control-btn"
          onClick={scrollLeft}
          aria-label="Ver álbum anterior"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="album-slider__control-btn"
          onClick={scrollRight}
          aria-label="Ver siguiente álbum"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};
