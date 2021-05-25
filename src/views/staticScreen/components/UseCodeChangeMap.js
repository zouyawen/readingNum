import React, { memo } from 'react';
import { mapData } from 'public/data/staticScreen';
import MapChart from 'components/MapChart';
import Swiper from 'components/Swiper';

import styles from './index.less'

export default memo(() => {

  const renderItem = item => {
    return (
      <div className={styles.popContent} key={item.city}>
        <div className={styles.city}>{item.city}</div>
        <div className={styles.list}>
          {/* <div className={styles.row}>
            <div className={styles.label}>应用接入量</div>
            <div className={styles.value}>{item.appNum}</div>
          </div> */}
          <div className={styles.row}>
            <div className={styles.label}>累计发码量</div>
            <div className={styles.value}>{item.allSendCode}</div>
          </div>
          {/* <div className={styles.row}>
            <div className={styles.label}>累计用码量</div>
            <div className={styles.value}>{item.allUseCode}</div>
          </div> */}
        </div>
      </div>
    )
  }

  const renderSwiper = list => SwiperSlide => {
    return (
      list.map(item => {
        return (
          <SwiperSlide >
            {renderItem(item)}
          </SwiperSlide>
          )
      })
    )
  }

  return (
    <div className={styles.useCodeChangeMapContainer}>
      <MapChart data={mapData}/>
      <div className={styles.popContainer}>
        <Swiper 
          slidesPerView={1}
          direction="horizontal"
          render={renderSwiper(mapData)}
        />
      </div>
    </div>
  )
})