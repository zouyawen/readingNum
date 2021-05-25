import React, { memo } from 'react';
import SubTitle from 'components/SubTitle';
import NumCardBlock from 'components/NumCardBlock';
import { allUseCodeNum } from 'public/data/staticScreen';

import styles from './index.less'

export default memo(() => {

  return (
    <div className={styles.sendCodeContainer}>
      <SubTitle title={allUseCodeNum.label} type={1}>{allUseCodeNum.total}</SubTitle>
      <NumCardBlock list={allUseCodeNum.list}/>
    </div>
  )
})