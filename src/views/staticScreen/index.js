import React, { memo } from 'react';
import Card from 'components/Card';
import SendCodeNum from './components/SendCodeNum';
import UseCodeNum from './components/UseCodeNum';
import UseCodeChangeLine from './components/UseCodeChangeLine';
import UseCodeChangeMap from './components/UseCodeChangeMap';
import AppcationEnter from './components/AppcationEnter';
import AppEnterCard from './components/AppEnterCard';
import Crumbs from 'components/Crumbs';

import styles from './index.less';

const list = [
  { label: '乡村服务'},
  { label: '浙农码' }
]
export default memo(() => {
  return (
    <div className={styles.wrap}>
      <Crumbs list={list} text='乡村服务 > 浙农码' />
      <div className={styles.blockRow}>
        <Card title='发码情况'>
          <SendCodeNum />
        </Card>
        <Card title='用码情况'>
          <UseCodeNum />
        </Card>
      </div>
      <div className={styles.blockRow2}>
        <div className={styles.blockl}>
          <Card title='用码量变化趋势'>
            <UseCodeChangeLine />
          </Card>
          <Card title='应用场景接入情况'>
            <AppcationEnter />
          </Card>
        </div>
        <div className={styles.blockr}>
          <Card title='乡镇发码情况统计'>
            <UseCodeChangeMap />
          </Card>
        </div>
      </div>
      <div className={styles.blockRow}>
        <Card title='应用场景接入情况'>
          <AppEnterCard />
        </Card>
      </div>
    </div>
  )
})