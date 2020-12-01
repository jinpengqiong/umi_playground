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
  const handleSelectChange = (value,type) => {
    switch (type) {
      case 'LangCode':
        formData.LangCode = value;
        break;
      case 'dataRange':
        formData.dataRange = value;
        break;
      case 'roleType':
        formData.roleType = value;
        break;
      case 'roleCalcMethod':
        formData.roleCalcMethod = value;
        break;
      case 'roleStatus':
        formData.roleStatus = value;
        break;
      case 'entities':
        formData.entities = value;
        break;
    }
  };
  const formInfo = getFieldsValue()
  console.log('formInfo', formInfo)
  const handleSubmit = () => {
    console.log('formData', formData)
  }
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
                initialValue={formData.langCode}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{ width: 120 }}
                  onChange={value => handleSelectChange(value, 'langCode')}
                >
                  <Option value="en-US">en-US</Option>
                  <Option value="cn-CH">cn-CH</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={10} key="2">
              <Form.Item
                name="dataRange"
                label="Date range"
                initialValue={formData.dataRange}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <RangePicker onChange={value => handleSelectChange(value, 'dataRange')} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={10} key="1">
              <Form.Item
                label="Sentiment"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div>
                  <Form.Item name="roleType" initialValue={formData.roleType}>
                    <Radio.Group
                      onChange={e => handleSelectChange(e.target.value, 'roleType')}
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
                      <Form.Item name="roleCalcMethod" initialValue={formData.roleCalcMethod}>
                        <Select
                          style={{ width: 120 }}
                          onChange={value => handleSelectChange(value, 'roleCalcMethod')}
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
                      <Form.Item name="roleStatus" initialValue={formData.roleStatus}>
                        <Select
                          style={{ width: 120 }}
                          onChange={value => handleSelectChange(value, 'roleStatus')}
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
                name="entities"
                label="Entities"
                initialValue={formData.entities}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  style={{ width: 256 }}
                  onChange={value => handleSelectChange(value, 'entities')}
                >
                  <Option value="U.P">U.P</Option>
                  <Option value="century_lake">Century Lake</Option>
                  <Option value="city_county">City County</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4} style={{ textAlign: 'left' }}>
              <Button type="primary" icon={<FilterOutlined />} onClick={handleSubmit}>
                Filter
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
