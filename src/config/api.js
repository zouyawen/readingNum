import { prefix } from './index';
import mainApi from './modules/main';
const api = {
  mainApi,
  code: {
    // 二维码-浙农码
    QRCODE_ZNM: `${prefix}/hydra-code-manager/znm/code/apply/getZnmQrCodeForWeb`,
    // 码管理接口
    CODE_STATISTICS: '/hydra-code-manager/znm/statistics/getCodeStatisticsListByDataScreen',
    // 扫码相关数据
    SWEEP_DATA: '/hydra-code-h5/api/v1/scan/code/screen',
    // 扫码趋势
    SWEEP_CHANGE_DATA: '/hydra-code-h5/api/v1/hour/scan/code',
    // 农业主体
    agriculture: {
      // 累计发码量
      ALL_SEND_CODE: '/hydra-code-manager/znm/screen/farming/subject',
      // 各应用码数量
      APP_CODE_NUM: '/hydra-code-manager/znm/screen/farming/app/subject',
      // 分布
      DISTRIBUTE: '/hydra-code-manager/znm/screen/farming/subject/distribute',
      // 获取码统计
      CODE_STATISTICS: '/hydra-code-manager/znm/screen/getCodeNumberStatistics',
      // 最新发码
      NEW_SEND_CODE: '/hydra-code-manager/znm/screen/farming/subject/newCode',
      // 分析
      SORT_AREA: '/hydra-code-manager/znm/screen/farming/subject/analyse',
    },
    // 生产要素
    productionFactors: {
      // 累计发吗
      ALL_SEND_CODE: '/hydra-code-manager/znm/screen/statisticsZnmEquipment',
      // 分布
      DISTRIBUTE: '/hydra-code-manager/znm/screen/statisticsZnmEquipmentUse',
      // 各应用码数量
      APP_CODE_NUM: '/hydra-code-manager/znm/screen/statisticsZnmEquipmentNumber',
      // 用码数量占比
      USE_CODE_RADIO: '/hydra-code-manager/znm/screen/statisticsZnmEquipmentRadio',
      // 最新发码
      NEW_SEND_CODE: '/hydra-code-manager/znm/screen/statisticsZnmEquipmentNew',
      // 按地区分析
      SORT_AREA: '/hydra-code-manager/znm/screen/statisticsZnmAnalysisEquipmentByArea',
      // 按分类分析
      SORT_SORT: '/hydra-code-manager/znm/screen/statisticsZnmAnalysisEquipmentByCate'
    },
    // 农产品
    produce: {
      // 累计发码量及分类发码量
      ALL_SEND_CODE: '/hydra-code-manager/znm/screen/farm/product',
      // 分布
      DISTRIBUTE: '/hydra-code-manager/znm/screen/farm/product/distribute',
      // 各应用码数量
      APP_CODE_NUM: '/hydra-code-manager/znm/screen/farm/app/subject',
      // 用码数量占比
      USE_CODE_RADIO: '/hydra-code-manager/znm/screen/farm/product/rate',
      // 最新发码
      NEW_SEND_CODE: '/hydra-code-manager/znm/screen/farm/product/newCode',
      // 分析
      SORT_AREA: '/hydra-code-manager/znm/screen/farm/product/code/analyse',
    },
    // 乡村
    administrativeVillage: {
      // 累计发吗
      ALL_SEND_CODE: '/hydra-code-manager/znm/screen/statisticsZnmVillage',
      // 分布
      DISTRIBUTE: '/hydra-code-manager/znm/screen/statisticsVillageUse',
      // 各应用码数量
      APP_CODE_NUM: '/hydra-code-manager/znm/screen/statisticsZnmVillageNumber',
      // 最新发码
      NEW_SEND_CODE: '/hydra-code-manager/znm/screen/statisticsZnmVillageNew',
      // 按地区分析
      SORT_AREA: '/hydra-code-manager/znm/screen/statisticsZnmAnalysisVillageByArea',
      // 按分类分析
      SORT_SORT: '/hydra-code-manager/znm/screen/statisticsZnmAnalysisVillageByCate'
    },
  }
}

export default api;