let ro =  (options, app) => {
    //返回一个异步的中间件函数
    return async function robotMiddleware(ctx, next) {
      //得到代理
      const source = ctx.get('user-agent') || '';
      //看是否匹配到百度的爬虫文件
      const match = options.ua.some(ua => ua.test(source));
      //如果匹配，返回403
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        // await 洋葱模型，对返回做阻断
        await next();
      }
    } 
};
module.exports = ro;
//现在可以使用 curl http://localhost:7001/news -A "Baiduspider" 看看效果。
