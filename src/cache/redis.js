const redis = require('redis');
const { REDIS_CONF } = require('../conf/db');

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', err => {
  console.log('redis err', err);
});

/**
 * redis set
 * @param {string} key
 * @param {string} val
 * @param {number} timeout 过期时间，单位 s
 */
function set(key, val, timeout = 3600) {
  if (typeof val == 'object') {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val);
  redisClient.expire(key, timeout);
}

/**
 * redis get
 * @param {*} key
 */
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }

      if (val == null) {
        resolve(null);
        return;
      }

      try {
        resolve(JSON.parse(val));
      } catch (e) {
        resolve(val);
      }
    });
  });
  return promise;
}

module.exports = {
  get,
  set
};
