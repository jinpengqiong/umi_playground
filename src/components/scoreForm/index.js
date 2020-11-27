import React from 'react';
// import PropTypes from 'prop-types';
import { Table, Tooltip, Select, Row, Col, Input, Form} from 'antd';
import { FileProtectOutlined } from '@ant-design/icons';

import styles from './index.less'

const { TextArea } = Input;
const { Option } = Select;

const ScoreForm = () => {
  const columns = [{
    title: 'No',
    dataIndex: 'audioId',
    align: 'center',
    width: '10%'
  }, {
    title: 'Line items',
    dataIndex: 'lineItems',
    align: 'center',
    width: '20%',
    render: (text) => {
      return (
        <div className={styles.lineItems}>{text}</div>
      );
    }
  }, {
      title: 'Score',
      dataIndex: 'score',
      align: 'center',
      render: (text, record) => {
        return (
          <Form.Item
            name={[`${record.key}`, 'score']}
            initialValue={text}
          >
            <Select bordered={false}>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
          </Form.Item>
        )
      }
  }, {
      title: 'Coaching Notes',
      dataIndex: 'coachingNotes',
      align: 'center',
      render: (text, record) => {
          return (
            <Form.Item
              name={[`${record.key}`, 'coachingNotes']}
              initialValue={text}
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <TextArea placeholder="'< = 1000 characters"  autoSize={{minRows: 4, maxRows: 6 }} bordered={false} />
            </Form.Item>

          )
      }
  }, {
      title: 'YES',
      dataIndex: 'YES',
      align: 'center',
      render: (text, record) => {
          const title = (
            <div>
              <p>{text}</p>
              <p>{text}</p>
            </div>
          );
          return (
            <Tooltip placement="topLeft" title={title} arrowPointAtCenter>
                <FileProtectOutlined />
            </Tooltip>
          )
      }
  }, {
      title: 'NO',
      dataIndex: 'NO',
      align: 'center',
      render: (text, record) => {
        const title = (
            <div>
              <p>{text}</p>
              <p>{text}</p>
            </div>
        );
        return (
          <Tooltip placement="topLeft" title={text} arrowPointAtCenter>
              <FileProtectOutlined />
          </Tooltip>
        )
    }
  }, {
      title: 'Weights',
      dataIndex: 'Weights',
      align: 'center'
  }];
  const products = [
    {
      id: 1,
      key: 1,
      audioId: 1,
      lineItems: 'Warmly Welcome. Greet your customerIntroduce yourself by name and ask for theirs too',
      score: 'yes',
      coachingNotes: 'default value',
      YES: '- complete suggested spiel (Thank you, Premier support, how to assist, speaking with)',
      NO: '- complete suggested spiel (Thank you, Premier support, how to assist, speaking with)',
      weights: 4
    },
    {
      id:2,
      key: 2,
      audioId:2,
      lineItems:'Warmly Welcome. Greet your customer- Introduce yourself by name and ask for theirs too',
      score:'no',
      coachingNotes:'',
      YES:'test',
      NO:'test',
      Weights:'3',
    },
    {
      id:3,
      key: 3,
      audioId:3,
      lineItems:'Warmly Welcome. Greet your customer- Introduce yourself by name and ask for theirs too',
      score:'yes',
      coachingNotes:'three',
      YES:'test',
      NO:'test',
      Weights:'3',
    }
  ];
  return (
      <>
        <Row style={{ paddingLeft: 15, paddingTop: 15 }} gutter={[0, 10]}>
            <Col span={4}>Over All Score:</Col>
            <Col span={7}>50</Col>
            <Col span={4}>Agent Name:</Col>
            <Col span={8}>Emma Green</Col>
        </Row>
        <Row style={{ paddingLeft: 15}} gutter={[0, 16]}>
            <Col span={4}>QA Name:</Col>
            <Col span={7}>Steven Ortiz</Col>
            <Col span={4}>Date of Score:</Col>
            <Col span={8}>2019/10/1</Col>
        </Row>
        <Table
        dataSource={products}
        pagination={false}
        columns={columns}
        />
      </>

  );
};

// ScoreForm.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
// };

export default ScoreForm;
