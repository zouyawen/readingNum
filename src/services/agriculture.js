import request from 'utils/request';
import api from 'config/api';

// 获取累计发码量
export const allSendCode = async data =>
  request({
    url: api.code.agriculture.ALL_SEND_CODE,
    data,
    method: 'get'
  })

// 分布
export const distributeGet = async data =>
  request({
    url: api.code.agriculture.DISTRIBUTE,
    data,
    method: 'get'
  })

// 各应用码数量
export const appCodeNum = async data =>
  request({
    url: api.code.agriculture.APP_CODE_NUM,
    data,
    method: 'get'
  })

// 最新发码
export const newSendCode = async data =>
  request({
    url: api.code.agriculture.NEW_SEND_CODE,
    data,
    method: 'get'
  })

// 按分析
export const analyseArea = async data =>
request({
  url: api.code.agriculture.SORT_AREA,
  data,
})