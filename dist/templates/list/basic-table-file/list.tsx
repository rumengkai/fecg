import { queryCheckListApi } from '@/service';
import { CheckListItem, CheckListParam } from '@/service/types';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import styles from './sku.module.less';

const List = () => {

  /**
   * @description: 请求列表
   * @param {CheckListParam} params
   * @return {*}
   */
  const queryList = async (params: CheckListParam & { current: number }) => {
    const { current } = params;
    const res = await queryCheckListApi({ ...params, pageNo: current });
    return {
      data: [...res.list],
      total: res.total,
    };
  };

  /**
   * @description: 点击查看审核详情
   * @param {string} id
   * @return {*}
   */
  const handleViewCheck = (id: string) => {
    navigateTo(`/sku/checkDetail`, {
      state: {
        detailId: id,
      },
    });
  };

  const columns: ProColumns<CheckListItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      search: false,
      align: 'center',
      width: 120,
      fixed: 'left',
    },
    {
      title: '审核状态',
      dataIndex: 'checkStatus',
      ellipsis: true,
      valueType: 'select',
      fieldProps: {
        options: [
          {
            label: '全部',
            value: 999,
          },
          {
            label: '待审核',
            value: 0,
          }
        ],
      },
      align: 'center',
    },
    {
      title: '操作',
      width: 150,
      dataIndex: 'option',
      valueType: 'option',
      key: 'option',
      align: 'center',
      fixed: 'right',
      render: (text, record, _, action) => [
        <Button
          key="viewCheck"
          type="link"
          size="small"
          className={styles['opt-btn']}
          onClick={() => handleViewCheck(record.id)}
        >
          审核详情
        </Button>
      ],
    },
  ];
  return (
    <div className={styles['sku-check-list']}>
      <ProTable
        columns={columns}
        options={false}
        pagination=\{{
          pageSizeOptions: [10, 20, 50],
        }}
        scroll=\{{ x: 1300 }}
        request={queryList}
        tableAlertRender={false}
        toolBarRender={false}
        rowKey="id"
      ></ProTable>
    </div>
  );
};

export default List;
