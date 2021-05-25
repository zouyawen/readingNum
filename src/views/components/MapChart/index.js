import React, { memo, useEffect, useRef, useCallback } from 'react';

import geoJson from 'public/map/anji.json';
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/province/zhejiang';
import { geoCoordMap } from './geoCoord';

import styles from './index.less';

export default memo(({
  data = [],
  labelKey='city', 
  valueKey='allSendCode'
}) => {

  const mapRef = useRef(null);

  const convertData = useCallback(() => {
    const res = [];
    data.forEach(item => {
      const row = Object.keys(geoCoordMap).filter(key => String(item[labelKey]).includes(key));
      row.forEach((item2, index) => {
        const geoCoord = geoCoordMap[item2];
        if(index === row.length-1) {
          res.push({
            name: item[labelKey],
            value: geoCoord.concat(item[valueKey])
          });
        }
      })
    })
    console.log(res)
    return res;
  }, [data, labelKey, valueKey])

  const init = useCallback(async () => {


    const myChart = echarts.init(mapRef.current);
    echarts.registerMap('anji', geoJson);


    const option = {
      backgroundColor: '#fff',
      geo: {
        type: 'map',
        map: 'anji',
        roam: false,
        geoIndex: 1,
        zooom: 1.1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff'  //字体颜色
            }
          },
          emphasis: {
            textStyle: {
              color: '#fff'  //选中后的字体颜色
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#6FB9FC',
            borderColor: '#fff',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: '#6FB9FC',
          }
        },
      },
      series: [{
        name: '点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(),
        symbolSize: 10,
        showEffectOn: 'render',
        effectTyp: 'ripple',
        rippleEffect: {
            period: 2,
            scale: 5,
            brushType: 'fill'
        },
        hoverAnimation: true,
        label: {
          normal: {
              show: false
          },
          emphasis: {
              show: false
          }
        },
        itemStyle: {
            normal: {
              color: '#89eeff',
              shadowBlur: 8,
              shadowColor: '#8deeff'
            }
        },
        zlevel: 1
    },]
  };


    myChart.setOption(option);

  }, [convertData])

  useEffect(() => {
    init()
  }, [init])

  return (
    <>
      <div ref={mapRef} className={styles.mapWrap}></div>
    </>
  )
})