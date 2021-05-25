const api = {
    // 最新发码（首页）
    NEW_CODE: '/hydra-code-manager/znm/screen/getNewestCode',
    // 各地市应用接入情况（首页）
    AREA_ACCESS: '/hydra-code-manager/znm/screen/getAreaApplied',
    // 农业主体用码情况统计（首页）
    USE_CODE_INFO: '/hydra-code-manager/znm/screen/getMainBaby',
    // 累计发码量（首页）
    TOTALT_CODE: '/hydra-code-manager/znm/screen/getTotalCode',
    // 累计扫码量
    SCAN_CODE: '/hydra-code-h5/api/v1/calculate/quantity',
    // relitu
    AREA_SCAN_CODE: '/hydra-code-h5/api/v1/area/scan/code',
    // 发码情况
    SEND_CODE_INFO: '/hydra-code-manager/znm/screen/getAreaAppCode',
    // 获取时间段内日扫码量
    GET_WEEK_CODE: '/hydra-code-h5/api/v1/calculate/per/day/create/code/quantity'
}

export default api;