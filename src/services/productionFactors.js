import request from 'utils/request';
import api from 'config/api';

// 获取累计发码量
export const allSendCode = async data =>
  request({
    url: api.code.productionFactors.ALL_SEND_CODE,
    data,
    method: 'get'
  })

// 分布
export const distributeGet = async data =>
  request({
    url: api.code.productionFactors.DISTRIBUTE,
    data,
    method: 'get'
  })

// 各应用码数量
export const appCodeNum = async data =>
  request({
    url: api.code.productionFactors.APP_CODE_NUM,
    data,
    method: 'get'
  })

// 最新发码
export const newSendCode = async data =>
  request({
    url: api.code.productionFactors.NEW_SEND_CODE,
    data,
    method: 'get'
  })

// 用码数量占比
export const useCodeRadio = async data =>
  request({
    url: api.code.productionFactors.USE_CODE_RADIO,
    data,
    method: 'get'
  })

// 按地区分析
export const analyseArea = async data =>
  request({
    url: api.code.productionFactors.SORT_AREA,
    data,
  })

// 按类别分析
export const analyseSort = async data =>
  request({
    url: api.code.productionFactors.SORT_SORT,
    data,
  })
