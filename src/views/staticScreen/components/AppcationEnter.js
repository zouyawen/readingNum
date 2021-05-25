import React, { memo, Fragment } from 'react';
import { applicationEnter } from 'public/data/staticScreen';

import styles from './index.less'

export default memo(() => {

  return (
    <div className={styles.useCodeChangeContainer}>
      <div className={styles.tabLeft}>
        {applicationEnter.map((item, index) => {
          return (
            <div key={index} className={styles.icon}>{item.type}</div>
          )
        })}
      </div>
      <div className={styles.tableRight}>
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th>归属地区</th>
              <th>业务场景名称</th>
              <th>累计发码数量</th>
            </tr>
          </thead>
          <tbody>
            {applicationEnter.map((item, index) => {
              return (
                <Fragment key={index} >
                  <tr>
                    <td>{item.label}</td>
                    <td>{item.sysName}</td>
                    <td>{item.value}</td>
                  </tr>
                  <tr><td colSpan={3}></td></tr>
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
})