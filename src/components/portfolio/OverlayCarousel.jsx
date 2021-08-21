import React, { useState, useEffect } from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OverlayCarousel = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShow(true);
    } else {
      setShow(false);
    }

    const OnResize = () => {
      if (window.innerWidth > 767) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('resize', OnResize);

    return () => {
      window.removeEventListener('resize', OnResize);
    };
  }, []);

  return (
    <div>
      <Carousel
        className="crausal"
        fade
        touch={true}
        indicators={show ? true : false}
      >
        {props.images.map((val, ind) => {
          return (
            <Carousel.Item interval={2000} key={ind}>
              <LazyLoadImage className="d-block w-100" src={val} effect="blur" alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default OverlayCarousel;
