import React, { memo, useEffect, useRef, useCallback } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'

import styles from './index.less';

export default memo(({
  xData = [],
  yData = [],
}) => {

  const lineRef = useRef(null)

  const init = useCallback(async () => {

    const option = {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          axis: 'x',
          label: {
            show: true
          }
        }
      },
      xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: xData
      },
      yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
      },
      series: [{
          data: yData,
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              borderWidth: 5,
              color: "#F45E23"
            }
          }
      }]
  };
  console.log(xData, yData)
  if(lineRef.current && xData.length > 0) {
    const myChart = echarts.init(lineRef.current);
    myChart.setOption(option);

  }

  }, [xData, yData])

  useEffect(() => {
    init()
  }, [init])

  return (
    <>
      <div ref={lineRef} className={styles["lineWrap"]}></div>

    </>
  )
})