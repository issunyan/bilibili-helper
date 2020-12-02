const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Generate pages object
const pagesObj = {};

const chromeName = ['popup'];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: 'public/index.html',
    filename: `${name}.html`,
  };
});

const copyFiles = [
  'src/manifest.json',
  'src/inject.js',
  {
    from: 'src/assets',
    to: 'assets',
  },
];

module.exports = {
  pages: pagesObj,
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      content: './src/content/index.js',
    },
    output: {
      filename: 'js/[name].js',
    },
    plugins: [CopyWebpackPlugin(copyFiles)],
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve('src'));
    // 处理字体文件名，去除hash值
    // const fontsRule = config.module.rule('fonts');

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // fontsRule.uses.clear();
    // fontsRule
    //   .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
    //   .use('url')
    //   .loader('url-loader')
    //   .options({
    //     limit: 1000,
    //     name: 'fonts/[name].[ext]',
    //   });
  },
};
