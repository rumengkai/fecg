export default {
  "get|/api/{{pascalCase name}}": {
    code: 200,
    message: "success",
    data: {
      "data|8": [
        {
          id: "@id",
          name: "@cname",
          category: "@string",
          datatime: "@datetime",
        },
      ],
    },
  },
};
