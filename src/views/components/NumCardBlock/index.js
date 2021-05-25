import React, { memo } from 'react';

import styles from './index.less';
import cardBg1 from 'assets/images/card_bg1.png';
import cardBg2 from 'assets/images/card_bg2.png';
import cardBg3 from 'assets/images/card_bg3.png';
import cardBg4 from 'assets/images/card_bg4.png';

const bgList = [cardBg1, cardBg2, cardBg3, cardBg4];
export default memo(({ list = [] }) => {

  return (
  <div className={styles.numCardBlockContainer}>
    {list.map((item, index) => {
      const bgIndex = index % bgList.length;
      const bg = bgList[bgIndex];
      const cardStyles = {
        backgroundImage: `url(${bg})`
      }

      return (
        <div className={styles.card} key={index} style={cardStyles}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
        </div>
      )
    })}
  </div>
  )
})