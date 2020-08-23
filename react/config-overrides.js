const { override, fixBabelImports, addLessLoader, addWebpackAlias} = require('customize-cra')
//const theme = requie('./themes/ant-nassak-theme');
const path = require('path')

module.exports = override(
    /*fixBabelImports('Import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    /*addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),*/
    addWebpackAlias({
        ['lib']: path.resolve(__dirname, './src/lib'),
        ['components']: path.resolve(__dirname, './src/components'),
        ['redux']: path.resolve(__dirname, './src/redux')
    })
);