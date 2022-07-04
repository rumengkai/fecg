const path = require("path");
module.exports = {
  rootDir: path.resolve(__dirname, "../"),
  setupFiles: ["jest-canvas-mock"],
  testEnvironment: "jsdom", //默认测试环境是node。如果你的工程是web app，可设置测试环境为jsdom，模拟浏览器环境
  testMatch: [
    //匹配到的测试用例，建议将测试用例放置在test目录下
    "<rootDir>/test/**/*.spec.js",
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], //模块文件扩展名，可以将常用的文件类型放在左边
  testPathIgnorePatterns: ["/node_modules"],
  collectCoverage: true, //需开启收集覆盖率报告开关
  coverageDirectory: "<rootDir>/test/coverage", //指定输出单元测试覆盖率报告路径，推荐为test/coverage
  collectCoverageFrom: [
    //需指定收集的覆盖率范围，这样统计的工程的覆盖率更加准确
    "<rootDir>/test/**/*.js",
  ],
  testResultsProcessor: "jest-bamboo-reporter", //自定义测试用例执行结果处理器，此处我们制定为jest-bamboo-report
  reporters: [
    //自定义报告
    "default", //需要添加jest的默认报告
    [
      "./node_modules/jest-html-reporter",
      {
        //在额外补充jest-html-report，生成test-report.html文件
        pageTitle: "Test Report",
        outputPath: "./test/report/test-report.html", //推荐指定test-report.html的输出路径为test/report/test-report.html
      },
    ],
  ],
};
