import React, { memo, useCallback } from 'react';
import { useCodeChange } from 'public/data/staticScreen';
import LineChart from 'components/LineChart';

import styles from './index.less'

export default memo(() => {

  const getData = useCallback(() => {
    const list = useCodeChange.month.list || [];
    const x = [];
    const y = [];
    list.forEach(item => {
      x.push(item.label)
      y.push(item.value)
    })
    return { x, y }
  }, [])

  return (
    <div className={styles.useCodeChangeLineContainer}>
      <div className={styles.tip}>
        今日用码：{useCodeChange.month.value || 0}
      </div>
      <LineChart xData={getData().x} yData={getData().y}/>
    </div>
  )
})