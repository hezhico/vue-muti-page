const Mock = require('mockjs');

Mock.mock(`${config.base}/login`, {
  code: "00",
  msg: "mocklogin"
});

