const path = require('path');
//библиотека помогает работать с путями. Встроена в Node
// чтобы подключить к проекту новые методы для работы с путём

const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин
// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
    const production = env.production;

    return {
        // указали первое место, куда заглянет webpack, — файл index.js в папке src
        entry: { main: './src/pages/index.js' },
        // указали в какой файл будет собираться весь js и дали ему имя
        output: {
          // переписали точку выхода, используя утилиту path
          path: path.resolve(__dirname, 'dist'),
          filename: production 
            ? 'scripts/[name].[contenthash].js'
            : 'scripts/[name].js',
          publicPath: ''
        },
        // добавили режим разработчика
        mode: 'development',
        devServer: {
          static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
          compress: true, // это ускорит загрузку в режиме разработки
          port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
          hot: true,
          open: true // сайт будет открываться сам при запуске npm run dev
        },
        module: {
          rules: [ // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
              // регулярное выражение, которое ищет все js файлы
              test: /\.js$/,
              // при обработке этих файлов нужно использовать babel-loader
              use: 'babel-loader',
              // исключает папку node_modules, файлы в ней обрабатывать не нужно
              exclude: '/node_modules/'
            },
            // добавили правило для обработки файлов
            {
              // регулярное выражение, которое ищет все файлы с такими расширениями
              test: /\.(png|svg|jpg|gif)$/,
              type: 'asset/resource',
              generator: {
                filename: 'images/[hash][ext][query]'
              }
            },
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[hash][ext][query]'
                }
              },
            {
              // применять это правило только к CSS-файлам
              test: /\.css$/,
              // при обработке этих файлов нужно использовать
              // MiniCssExtractPlugin.loader и css-loader
              use: [production ? MiniCssExtractPlugin.loader: 'style-loader', 
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              'postcss-loader'
              ]
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
          }),
          new CleanWebpackPlugin(), // использовали плагин
          new MiniCssExtractPlugin({
            filename: production 
                ? 'styles/[name].[contenthash].css'
                : 'styles/[name].css'
          }) // подключение плагина для объединения файлов
        ],
        devtool: production ? false : 'eval-source-map'
    }
}

// module.exports — это синтаксис экспорта в Node.js