import { Table } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styles from './index.less';

export const TableComponent = props => {
  const columns = [
    {
      title: 'Job Number',
      dataIndex: 'job_number',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.key - b.key,
      sortDirections: ['descend'],
    },
    {
      title: 'Job Name',
      dataIndex: 'job_name',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
    },
    {
      title: 'Average Accuracy',
      dataIndex: 'average_accuracy',
    },
    {
      title: 'Language Code',
      dataIndex: 'language_code',
    },
    {
      title: 'Call Duration',
      dataIndex: 'call_duration',
    },
    {
      title: 'Call Type',
      dataIndex: 'call_type',
    },
    {
      title: 'QA Name',
      dataIndex: 'qa_name',
    },
    {
      title: 'Agent Name',
      dataIndex: 'agent_name',
    },
    {
      title: 'QA Supervisor Name',
      dataIndex: 'qa_supervisor_name',
    },
    {
      title: 'Overall Score',
      dataIndex: 'overall_score',
      fixed: 'right',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      fixed: 'right',
      // render: (_, record) => {
      //   const editable = isEditing(record);
      //   return editable ? (
      //     <span>
      //       <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
      //         Save
      //       </a>
      //       <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
      //         <a>Cancel</a>
      //       </Popconfirm>
      //     </span>
      //   ) : (
      //     <a disabled={editingKey !== ''} onClick={() => edit(record)}>
      //       Edit
      //     </a>
      //   );
      // },
    },
  ];

  const data = [
    {
      key: '1',
      job_name:'202010262354646354.mp3',
      job_number: '1',
      timestamp: 32,
      average_accuracy: '96.7%',
      language_code: 'en-US',
      call_duration: '77:04',
      call_type: 'sales call',
      qa_name: 'John Brown',
      agent_name: 'Lena Johnston',
      qa_supervisor_name: 'Lester Anderson',
      overall_score: '45',
    },
    {
      key: '2',
      job_name:'202010262354646354.mp3',
      job_number: '2',
      timestamp: 32,
      average_accuracy: '96.7%',
      language_code: 'en-US',
      call_duration: '77:04',
      call_type: 'sales call',
      qa_name: 'John Brown',
      agent_name: 'Lena Johnston',
      qa_supervisor_name: 'Lester Anderson',
      overall_score: '45',
    },
    {
      key: '3',
      job_name:'202010262354646354.mp3',
      job_number: '3',
      timestamp: 32,
      average_accuracy: '96.7%',
      language_code: 'en-US',
      call_duration: '77:04',
      call_type: 'sales call',
      qa_name: 'John Brown',
      agent_name: 'Lena Johnston',
      qa_supervisor_name: 'Lester Anderson',
      overall_score: '45',
    },
  ];

  const handlePageChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <div className={styles.tableContainer}>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handlePageChange}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};
