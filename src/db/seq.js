const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db');
const { isProd, isTest } = require('../utils/env');

const { database, user, password, host, port, dialect } = MYSQL_CONF;

const conf = {
  host,
  port,
  dialect
};

if (isProd) {
  // 线上环境使用 - 连接池：创建n个连接用来连接数据库
  conf.pool = {
    max: 5,
    min: 0,
    idle: 10000 // 如果连接池 10s 之内没有使用，则释放
  };
}

if (isTest) {
  // 测试环境不要打印sql
  // 空函数就啥也不做
  conf.logging = () => {};
}

const seq = new Sequelize(database, user, password, rest);

module.exports = seq;
