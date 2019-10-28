const moment = require('moment');
//extend里边写的东西相当于过滤器
exports.relativeTime = time => moment(time).format('YYYY-MM-DD HH:mm');