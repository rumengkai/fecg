import { Item } from '@/service/types';
import { render } from '@testing-library/react';
import List from './List';

describe('List 组件测试', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return { matches: false, addListener: () => {}, removeListener: () => {} };
      },
    });
  });
  test('默认测试', () => {
    const { container } = render(<List></List>);
    const table = container.querySelector('.ant-pro-table');
    expect(table.tagName).toEqual('DIV');
  });
});
