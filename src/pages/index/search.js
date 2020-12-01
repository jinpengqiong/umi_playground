import { Form, Row, Col, Button, Select, DatePicker, Radio } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import styles from './index.less';
const { Option } = Select;
const { RangePicker } = DatePicker;

export const SearchComponent = props => {
  const { formData } = props
  const [form] = Form.useForm();
  const { getFieldsValue, setFieldsValue, resetFields } = form;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onFinish = values => {

  };
  const handleSelectChange = value => {};
  const formInfo = getFieldsValue()
  console.log('formInfo', formInfo)
  return (
    <div>
      <div className={styles.searchSection}>
        <h3>Contact Search</h3>
        <Form
          {...layout}
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>
            <Col span={10} key="1">
              <Form.Item
                name="LangCode"
                label="Language Code"
                initialValues="en-US"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select style={{ width: 120 }} onChange={handleSelectChange}>
                  <Option value="en-US">en-US</Option>
                  <Option value="cn-CH">cn-CH</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={10} key="2">
              <Form.Item
                name="DateRange"
                label="Date range"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <RangePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={10} key="1">
              <Form.Item
                // name="sentiment"
                label="Sentiment"
                initialValues="Caller"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div>
                  <Form.Item name="roleType">
                    <Radio.Group
                    // onChange={onRadioChange}
                    // value="Agent"
                    >
                      <Radio value="Agent" key="Agent">
                        Agent
                      </Radio>
                      <Radio value="Caller" key="Caller">
                        Caller
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Row className={styles.lineItemStyle}>
                    <Col>
                      <Form.Item name="condition" initialValues="trend">
                        <Select
                          defaultValue="average"
                          style={{ width: 120 }}
                          onChange={handleSelectChange}
                        >
                          <Option value="average">average</Option>
                          <Option value="trend">trend</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col>
                      <span className={styles.words}>is</span>
                    </Col>
                    <Col>
                      <Form.Item name="status" initialValues="negative">
                        <Select
                          defaultValue="positive"
                          style={{ width: 120 }}
                          onChange={handleSelectChange}
                        >
                          <Option value="positive">positive</Option>
                          <Option value="negative">negative</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Form.Item>
            </Col>
            <Col span={10} key="2">
              <Form.Item
                name="Entities"
                label="Entities"
                initialValues="city_county"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  defaultValue="City County"
                  style={{ width: 256 }}
                  onChange={handleSelectChange}
                >
                  <Option value="U.P">U.P</Option>
                  <Option value="century_lake">Century Lake</Option>
                  <Option value="city_county">City County</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4} style={{ textAlign: 'left' }}>
              <Button type="primary" htmlType="submit" icon={<FilterOutlined />}>
                Filter
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
