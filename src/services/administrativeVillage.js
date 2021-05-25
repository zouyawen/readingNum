import request from 'utils/request';
import api from 'config/api';

// 获取累计发码量
export const allSendCode = async data =>
  request({
    url: api.code.administrativeVillage.ALL_SEND_CODE,
    data,
    method: 'get'
  })

// 分布
export const distributeGet = async data =>
  request({
    url: api.code.administrativeVillage.DISTRIBUTE,
    data,
    method: 'get'
  })

// 各应用码数量
export const appCodeNum = async data =>
  request({
    url: api.code.administrativeVillage.APP_CODE_NUM,
    data,
    method: 'get'
  })

// 最新发码
export const newSendCode = async data =>
  request({
    url: api.code.administrativeVillage.NEW_SEND_CODE,
    data,
    method: 'get'
  })

// 按地区分析
export const analyseArea = async data =>
  request({
    url: api.code.administrativeVillage.SORT_AREA,
    data,
  })

// 按类别分析
export const analyseSort = async data =>
  request({
    url: api.code.administrativeVillage.SORT_SORT,
    data,
  })
