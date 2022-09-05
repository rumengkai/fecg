module.exports = {
  openapi: [
    {
      schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
      requestLibPath: "import request from '@/utils/request';",
      serversPath: "./test/temp/servers",
      mockFolder: "./test/temp/mock/api",
      // apiPrefix: '',
    },
    {
      schemaPath: "http://smart-ops-sbx.jd.local/v3/api-docs",
      requestLibPath: "import request from '@/utils/request';",
      serversPath: "./test/temp/servers2",
      mockFolder: "./test/temp/mock/api2",
      projectName: "service",
      namespace: "APITypes",
    },
  ],
};
