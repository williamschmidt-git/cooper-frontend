/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';
import BackgroundPanelSlider from '../../components/BackgroundPanelSlider/BackgroundPanelSlider';
import Cards from '../../components/Cards/Cards';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderComponent() {
  const [content] = useState([
    {
      text: 'Organize your daily job enhance your life performance',
      img: 'assets/imgs/bitmap.png',
    },
    {
      text: 'Mark one activity as done makes your brain understands the power of doing.',
      img: 'assets/imgs/bitmap (1).png',
    },
    {
      text: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      img: 'assets/imgs/bitmap (2).png',
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <BackgroundPanelSlider />
      <Slider {...settings} className="slider-wrapper">
        {content.map((e) => (
          <Cards text={e.text} src={e.img} />
        ))}
      </Slider>
    </>
  );
}
