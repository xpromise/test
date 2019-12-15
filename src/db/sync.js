const seq = require('./seq');

require('./model');

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('auth ok');
  })
  .catch(() => {
    console.log('auth err');
  });

// 执行同步
seq
  .sync({
    force: true
  })
  .then(() => {
    // 退出进程，不让seq一直占用
    console.log('sync ok');
    process.exit();
  });
