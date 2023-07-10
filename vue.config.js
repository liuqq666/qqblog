const { defineConfig } = require('@vue/cli-service')
const Timestamp = new Date().getTime()

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: `DS-Blog`, 
    }},

    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                },
              },
            ],
          },
        ],
      },
    },
    
})
