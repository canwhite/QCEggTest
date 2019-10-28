const Controller = require('egg').Controller;

class NewsController extends Controller{

    async list(){

        //请求模拟
        const newsList = await this.ctx.service.news.list();
        //写法
        await this.ctx.render('news/list.tpl', newsList);


        /*
        //为了满足koa2的习惯，有时候可以把ctx写成语法糖的形式 
        //const ctx = this.ctx;
        const page = this.ctx.query.page || 1;
        const newsList = await this.ctx.service.news.list(page);
        await this.ctx.render('news/list.tpl', { list: newsList });
        */

    }
}
module.exports = NewsController;