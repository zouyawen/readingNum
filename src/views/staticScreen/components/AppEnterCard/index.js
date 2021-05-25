import React, { Component } from 'react'
import styles from './index.less'
import { appEnterCardData } from 'public/data/staticScreen';
export default class AppEnterCard extends Component {
  render() {
    return (
      <div className={styles.appCardContainer}>
        <div className={styles.cardContainer}>
          {appEnterCardData.map((item, index) => {
            return (
              <>
                <div className={styles.card} key={index}>
                  <div className={styles.imgContainer}>
                    <img src={item.url} alt="" />
                  </div>
                  <div className={styles.cardInfo}>
                    <div>用途：{item.source}</div>
                    <div>应用系统：{item.appScenario}</div>
                  </div>
                </div>
              </>
            )
          })
          }
        </div>
      </div>
    )
  }
}
