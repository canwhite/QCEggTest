exports.keys = '1571993491560_7494';
//添加view配置
exports.view = {
    defaultViewEngine:'nunjucks',
    mapping:{
        '.tpl': 'nunjucks',
    }
};
//新闻请求的一些配置信息
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',//请求地址
};

// 注册爬虫阻止中间件robot，可以注册多个
exports.middleware = [
    'robot'
];

//中间件的配置信息
exports.robot = {
    ua: [
      /Baiduspider/i,
    ]
};