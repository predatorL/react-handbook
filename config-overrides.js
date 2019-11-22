const { override, addWebpackExternals, addDecoratorsLegacy, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackExternals({
        'videojs': 'videojs'
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);
