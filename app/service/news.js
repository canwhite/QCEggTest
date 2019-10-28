const Service = require('egg').Service;

class NewsService extends Service{
    async list(page=1){

        //在这里主要是一些数据请求，请求模拟
        const dataList = {
            list: [
              { id: 1, title: 'this is news 1', url: '/news/1',time:new Date()},
              { id: 2, title: 'this is news 2', url: '/news/2',time:new Date()}
            ]
        };
        return dataList;


        /*
        完成一次具体的请求.233333官方的例子跑不起来
        */
        /*


        //读取配置信息
        const {pageSize,serverUrl} = this.config.news;

        //使用它内部封装的httpClient，发起get请求
        let url = `${serverUrl}/topstories.json`;
        let params = {
            data: {
              orderBy: '"$key"',
              startAt: `"${pageSize * (page - 1)}"`,
              endAt: `"${pageSize * page - 1}"`,
            },
            dataType: 'json',
        };
        const {data:idList} = await this.ctx.curl(url,params);
        //根据idList的数量发起多个请求.
        //Promise.all 执行的是Promise数组   
        const newsList = await Promise.all(
            Object.keys(idList).map(key=>{
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, { dataType: 'json' });
            })
        );
        //返回请求到的数据,返回的是请求结果的data值，map返回新数组
        return newsList.map(res=>res.data);




        */

        
    }
}
module.exports = NewsService;