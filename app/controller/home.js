//首先从egg继承一个controller
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        this.ctx.body = 'hi, egg';
    }
}
module.exports  = HomeController;


