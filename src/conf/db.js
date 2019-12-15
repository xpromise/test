const { isProd } = require('../utils/env');

let REDIS_CONF = {
  host: 'localhost',
  port: 6379
};

let MYSQL_CONF = {
  host: 'localhost',
  dialect: 'mysql',
  user: 'root',
  password: 'root',
  database: 'koa2_weibo',
  port: 3306
};

if (isProd) {
  REDIS_CONF = {
    host: 'localhost',
    port: 6379
  };

  MYSQL_CONF = {
    host: 'localhost',
    dialect: 'mysql',
    user: 'root',
    password: 'root',
    database: 'koa2_weibo',
    port: 3306
  };
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
};
