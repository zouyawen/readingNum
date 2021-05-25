import React, { memo } from 'react';

import styles from './index.less';

export default memo(({ title = '', children}) => {

  return (
    <div className={styles.cardTitleContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  )
})