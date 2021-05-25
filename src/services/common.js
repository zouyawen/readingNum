import { ajaxSync } from 'utils/ajax';
import api from 'config/api';

// 获取生码数据
export const codeProductionDataGet = async () => {
  const { res } = await ajaxSync.post(api.code.CODE_STATISTICS);
  if (res && res.state === 200) {
    return res.results;
  }
  return false;
};

// 获取扫码数据
export const codeSweepDataGet = async () => {
  const { res } = await ajaxSync.get(api.code.SWEEP_DATA);
  if (res && res.state === 200) {
    return res.results;
  }
  return false;
};

// 获取日扫码趋势
export const codeSweepChangeGet = async () => {
  const { res } = await ajaxSync.get(api.code.SWEEP_CHANGE_DATA);
  if (res && res.state === 200) {
    return res.results;
  }
  return false;
};
