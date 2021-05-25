import { ajaxSync } from 'utils/ajax';
import api from 'config/api';

// 最新发码（首页）
export const getNewCode = async () => {
    const { res } = await ajaxSync.post(api.mainApi.NEW_CODE);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};
// 各地市应用接入情况（首页）
export const getCodeAccess = async () => {
    const { res } = await ajaxSync.post(api.mainApi.AREA_ACCESS);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};
// 农业主体用码情况统计（首页）
export const getUseCodeInfo = async () => {
    const { res } = await ajaxSync.post(api.mainApi.USE_CODE_INFO);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};
// 累计发码量（首页）
export const getTotalCode = async () => {
    const { res } = await ajaxSync.post(api.mainApi.TOTALT_CODE);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};

// 获取累计扫码量
export const getScanCode = async () => {
    const { res } = await ajaxSync.get(api.mainApi.SCAN_CODE);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};

// 获取relitu
export const getAreaCode = async () => {
    const { res } = await ajaxSync.get(api.mainApi.AREA_SCAN_CODE);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};

// 获取时间段内日扫码量
export const getWeekCode = async (dateRange) => {
    const { res } = await ajaxSync.get(api.mainApi.GET_WEEK_CODE, { dateRange, timesInterval: '' });
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};

// 发码情况
export const getSendCodeInfo = async () => {
    const { res } = await ajaxSync.post(api.mainApi.SEND_CODE_INFO);
    if (res && res.state === 200) {
        return res.results;
    }
    return false;
};



