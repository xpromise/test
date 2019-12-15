const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  });
});

router.get('/json', async (ctx, next) => {
  // const session = ctx.session;
  // if (session.viewNum == null) {
  //   session.viewNum = 0;
  // }
  // session.viewNum++;

  ctx.body = {
    title: 'koa2 json'
  };
});

module.exports = router;
