const ENV = process.env.NODE_ENV;

module.exports = {
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isDev: ENV === 'development',
  notDev: ENV !== 'development',
  isTest: ENV === 'test',
  notTest: ENV !== 'test'
};
