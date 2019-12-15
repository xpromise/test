/**
 * @description test demo
 * @author xiongjian
 */

function sum(a, b) {
  return a + b;
}

test('10 + 20 = 30', () => {
  const res = sum(10, 20)
  expect(res).toBe(30);
  // expect(res).not.toBe(40); 
});