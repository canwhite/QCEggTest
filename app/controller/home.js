//首先从egg继承一个controller
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        const ctx = this.ctx;
        ctx.set('Content-Type', 'application/json');
        //ctx.status = 200;
        ctx.body = {data:{
            message:'hello world'
        }};
    }
}
module.exports  = HomeController;


