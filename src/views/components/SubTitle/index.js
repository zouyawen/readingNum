import React, { memo } from 'react';

import styles from './index.less';
import title1 from 'assets/images/title_icon1.png'
import title2 from 'assets/images/title_icon2.png'

const titleList = [title1, title2]
export default memo(({ title = '', type = '1', children}) => {

  return (
    <div className={styles.subTitleContainer}>
      <img src={titleList[Number(type) -1]} alt=''/>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
})