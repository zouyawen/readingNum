import img1 from 'src/assets/images/img1.png'
import img2 from 'src/assets/images/img2.png'
import img3 from 'src/assets/images/img3.png'
import img4 from 'src/assets/images/img4.png'
// 累计发码量
export const allSendCodeNum = {
  total: 157884,
  label: '累计发码量',
  list: [
    { label: '农业主体', value: 15007 },
    { label: '农产品', value: 138237 },
    { label: '生产要素', value: 0 },
    { label: '美丽乡村', value: 4640 },
  ]
}

// 累计用码量
export const allUseCodeNum = {
  total: 1381,
  label: '累计用码量',
  list: [
    { label: '示码量', value: 543 },
    { label: '扫码量', value: 838 },
  ]
}

// 用码量变化趋势
export const useCodeChange = {
  // 日
  day: {
    value: 0,
    list: [
      { label: '1', value: 0 },
      { label: '2', value: 0 },
      { label: '3', value: 0 },
      { label: '4', value: 0 },
      { label: '5', value: 0 },
      { label: '6', value: 0 }
    ]
  },
  // 周
  week: {
    value: 0,
    list: [
      { label: '周一', value: 0 },
      { label: '周二', value: 0 },
      { label: '周二', value: 0 },
      { label: '周二', value: 0 },
      { label: '周二', value: 0 },
      { label: '周二', value: 0 }
    ]
  },
  // 月
  month: {
    value: 172,
    list: [
      { label: '4-27', value: 64 },
      { label: '4-28', value: 47 },
      { label: '4-29', value: 266 },
      { label: '4-30', value: 93 },
      { label: '5-1', value: 14 },
      { label: '5-2', value: 8 },
      { label: '5-3', value: 10 },
      { label: '5-4', value: 26 },
      { label: '5-5', value: 3 },
      { label: '5-6', value: 18 }
    ]
  },
  // 年
  year: {
    value: 0,
    list: [
      { label: '1月', value: 0 },
      { label: '2月', value: 0 },
      { label: '3月', value: 0 },
      { label: '4月', value: 0 },
      { label: '5', value: 0 },
      { label: '6', value: 0 }
    ]
  },
}

// 应用场景接入情况
export const applicationEnter = [
  {
    type: '县',
    label: '安吉县',
    sysName: '安吉白茶交易系统',
    value: 13900,
  },
  {
    type: '县',
    label: '安吉县',
    sysName: '安吉白茶追溯系统',
    value: 138237,
  },
]

// 地图数据
export const mapData = [
  {
    city: '安吉县',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 3107,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '梅溪镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 3107,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '天子湖镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 2710,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '鄣吴镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 326,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '杭垓镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 336,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '孝丰镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 1088,
    // 累计用码量
    allUseCode: 23
  },

  {
    city: '报福镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 107,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '章村镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 27,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '天荒坪镇',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 49,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '溪龙乡',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 926,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '上墅乡',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 211,
    // 累计用码量
    allUseCode: 23
  },

  {
    city: '山川乡',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 41,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '递铺街道',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 3747,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '昌硕街道',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 40,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '灵峰街道',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 422,
    // 累计用码量
    allUseCode: 23
  },
  {
    city: '孝源街道',
    // 应用接入量
    appNum: 1,
    // 累计发码量
    allSendCode: 1567,
    // 累计用码量
    allUseCode: 23
  }
]
//应用场景接入情况
export const appEnterCardData = [
  {
    url: img1,
    source: "农业主体-规模大户",
    appScenario: "安吉白茶交易系统"
  },
  {
    url: img2,
    source: "农业主体-规模大户",
    appScenario: "安吉白茶交易系统"
  },
  {
    url: img3,
    source: "农业主体-规模大户",
    appScenario: "安吉白茶交易系统"
  },
  {
    url: img4,
    source: "农业主体-规模大户",
    appScenario: "安吉白茶交易系统"
  }

]