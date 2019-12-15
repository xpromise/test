/**
 * @description json test
 * @author xiongjian
 */

const server = require('./server');

test('json 接口返回数据格式正确', async () => {
  const res = await server.get('/json');
  expect(res.body).toEqual({
    title: 'koa2 json'
  });
  expect(res.body.title).toBe('koa2 json');
});

/* test('json 接口返回数据格式正确', async () => {
  const res = await (await server.post('/login')).send({
    username: 'zhangsan',
    password: '123'
  });
  expect(res.body).toEqual({
    title: 'koa2 json'
  });
  expect(res.body.title).toBe('koa2 json');
}); */