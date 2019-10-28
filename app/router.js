//设置路由映射
let app = (app)=>{
    const {router,controller} = app;
    //根目录,依次组成是controller.文件名.方法名，
    router.get('/',controller.home.index);
    //新闻部分
    router.get('/news', controller.news.list);
}
module.exports = app;
