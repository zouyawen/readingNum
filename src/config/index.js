//ajax请求前缀
export const prefix = '/apiInterface/interface';

//高德地图密钥
export const amapkey = '12fea8c7f7f0ec1a0a851b89feaf84ea';

//------------------------------------------------------------------------------------------------------------------------------------
// 是否是本地开发环境
const location = window.location;
export const isDev =
  location.href.indexOf('http://localhost') === 0 ||
  location.href.indexOf('http://192.168') === 0 ||
  location.href.indexOf('http://127.0.0.1') === 0;
// 是否是远程开发环境
export const isRemoteDev = location.href.indexOf('.kf315.net') >= 0 && location.href.indexOf('dev-') >= 0;
// 是否是测试环境
export const isTesting = location.href.indexOf('.kf315.net') >= 0;
// 是否是生产环境
export const isProduction = !(isDev || isTesting || isRemoteDev);

// 本地开发设置
const devConfig = {
  // 图片上传返回值
  fileDomain: 'https://filetest.jgwcjm.com',
  //视频播放域名
  videoDomain: 'https://cjm3v.kf315.net',
  // 溯源预览，h5模板预览
  previewWarp: 'http://trace-h5.dev-znm.kf315.net',
  // 系统地址
  sysDomain: 'http://dev-znm.kf315.net/system'
};
// 远程开发环境设置
const remoteDevConfig = {
  // 图片上传返回值
  fileDomain: 'https://file.jgwcjm.com',
  //视频播放域名
  videoDomain: 'https://cjm3v.kf315.net',
  // 溯源预览，h5模板预览
  previewWarp: 'http://trace-h5.dev-znm.kf315.net',
  // 系统地址
  sysDomain: 'http://dev-znm.kf315.net/system'
};
// 测试环境设置
const testConfig = {
  // 图片上传返回值
  fileDomain: 'https://filetest.jgwcjm.com',
  //视频播放域名
  videoDomain: 'https://cjm3v.kf315.net',
  // 溯源预览，h5模板预览
  previewWarp: 'http://traceh5.znm.kf315.net',
  // 系统地址
  sysDomain: 'http://system.znm.kf315.net'
};
// 生产环境设置
const productionConfig = {
  // 图片上传返回值
  fileDomain: 'https://file.jgwcjm.com',
  //视频播放域名
  videoDomain: 'https://cjm3v.jgwcjm.com',
  // 溯源预览，h5模板预览
  previewWarp: 'http://trace-h5.znm.zjagri.cn',
  // 系统地址
  sysDomain: 'http://zj.znm.zjagri.cn'
};
//
let config = {};
if (isDev) {
  config = devConfig;
} else if (isRemoteDev) {
  config = remoteDevConfig;
} else if (isTesting) {
  config = testConfig;
} else if (isProduction) {
  config = productionConfig;
}
const finalConfig = { ...config };
export default finalConfig;
//-----