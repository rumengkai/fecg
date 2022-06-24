import request from 'utils/request';
import { Res{{pascalCase name}}Type } from './type';

export const {{pascalCase name}} = async (param: { id: string }) => {
  return request<Res{{pascalCase name}}>({
    url: '/api/{{pascalCase name}}',
    method: 'POST',
    data: param,
  });
};
