import React, { memo } from 'react';
import SubTitle from 'components/SubTitle';
import NumCardBlock from 'components/NumCardBlock';
import { allSendCodeNum } from 'public/data/staticScreen';

import styles from './index.less'

export default memo(() => {

  return (
    <div className={styles.sendCodeContainer}>
      <SubTitle title={allSendCodeNum.label} type={2}>{allSendCodeNum.total}</SubTitle>
      <NumCardBlock list={allSendCodeNum.list}/>
    </div>
  )
})