const resolve = require('./resolve');

const myAlias = {
  assets: resolve('../src/assets'),
  src: resolve('../src'),
  components: resolve('../src/views/components'),
  services: resolve('../src/services'),
  config: resolve('../src/config'),
  utils: resolve('../src/utils'),
  public: resolve('../public'),
};

const allVersion = 5;  // 总共版本
for (let index = 0; index < allVersion; index++) {
  const vString = `v${index + 1}`;
  myAlias[vString] = resolve(`../src/views/${vString}`);
}

module.exports = myAlias;