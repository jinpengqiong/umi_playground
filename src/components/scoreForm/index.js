import React from 'react';
// import PropTypes from 'prop-types';
import { Table, Tooltip, Select, Row, Col, Input } from 'antd';
import { FileProtectOutlined } from '@ant-design/icons';

import styles from './index.less'

const { TextArea } = Input;
const { Option } = Select;

const ScoreForm = () => {
  const columns = [{
    title: 'No',
    dataIndex: 'number',
    align: 'center',
    width: '40px'
  }, {
    title: 'Line items',
    dataIndex: 'lineItems',
    align: 'center',
    width: '100px',
    render: (text) => {
      return (
        <div>{text}</div>
      );
    }
  }, {
      title: 'Score',
      dataIndex: 'score',
      align: 'center',
      render: (text) => {
        return (
            <>
                <Select defaultValue={text} bordered={false}>
                    <Option value="Yes">Yes</Option>
                    <Option value="No">No</Option>
                </Select>
            </>
        )
      }
  }, {
      title: 'Coaching Notes',
      dataIndex: 'coaching',
      align: 'center',
      render: (text) => {
          return (
            <TextArea placeholder="'< = 1000 characters" defaultValue={text} autoSize={{minRows: 4, maxRows: 6 }} bordered={false} />
          )
      }
  }, {
      title: 'YES',
      dataIndex: 'yes',
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
      dataIndex: 'no',
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
      dataIndex: 'weights',
      align: 'center'
  }];
  const products = [
    {
      key: '1',
      number: '1',
      lineItems: 'Warmly Welcome. Greet your customerIntroduce yourself by name and ask for theirs too',
      score: 'Yes',
      coaching: 'default value',
      yes: '- complete suggested spiel (Thank you, Premier support, how to assist, speaking with)',
      no: '- complete suggested spiel (Thank you, Premier support, how to assist, speaking with)',
      weights: 4
    }
  ];
  return (
      <>
        <Row style={{ paddingLeft: 15 }} gutter={[0, 10]}>
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