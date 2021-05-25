import React, { memo } from 'react';

import styles from './index.less';

export default memo(({
  list = []
}) => {

  return (
    <div className={styles.crumbContainer}>
      {list.map((item, index) => {
        if(list.length - 1 === index) {
          return <span className={styles.current}>{item.label}</span>
        } else {
          return `${item.label} > `
        }
      })}
    </div>
  )
})