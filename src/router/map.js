import asyncComponent from '../utils/asyncComponent';

export default [
  // 默认
  {
    path: '/',
    component: asyncComponent(() => import(/* webpackChunkName: "modules" */ '../views/staticScreen'))
  },

];
