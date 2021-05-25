import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar, Autoplay]);

export default class extends React.Component {

  render() {
    const {
      slidesPerView = 2,
      autoplay = true,
      loop = true,
      direction = 'vertical',
      spaceBetween = 0,
      render
    } = this.props;

    return (
      <>
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          direction={direction}
          autoplay={autoplay}
          loop={loop}
        >
          {render(SwiperSlide)}
        </Swiper>
      </>
    )
  }
}