import Mock from "mockjs"
Mock.setup({
    timeout: 1000
    })
var value=1000
Mock.mock("/api/info", "get", {  //折线图接口
  code: 200,
  data: {
    Tue: () => value++,
    Wed: 231,
    Thu: 2142,
    Fri: 432,
    Sat: 9271,
    Sun: 8987,
  },
});
Mock.mock("/api/info1", "get", { //饼图接口
    code: 200,
    'data': [
      {
        value: () => value++, // 每次调用自增
        name: 'Search Engine'
      },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ]
  });
Mock.mock("/api/info2", "get", {  //环形图接口
    code: 200,
    data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
  });
  Mock.mock("/api/info3", "get", { //柱状图接口
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  Mock.mock("/api/info4", "get", {
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  Mock.mock("/api/info5", "get", {
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  Mock.mock("/api/info6", "get", {
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  Mock.mock("/api/info7", "get", {
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  Mock.mock("/api/info8", "get", {
    code: 200,
    data: {
      Tue: 123,
      Wed: 231,
      Thu: 2142,
      Fri: 432,
      Sat: 9271,
      Sun: 8987,
    },
  });
  setInterval(() => {
    value+=50;
  }, 1000);