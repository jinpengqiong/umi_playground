import { connect } from 'dva';
import {SearchComponent} from './search'
import { TableComponent } from './table';
import { Form, Row, Col, Input, Button, Select, DatePicker, Radio } from 'antd';
import styles from './index.less';
const { Option } = Select;
const { RangePicker } = DatePicker;

// import { formatMessage } from 'umi-plugin-locale';

const ListPage = ({ list, dispatch }) => {
  return (
    <div>
      <SearchComponent {...list} />
      <TableComponent {...list} />
    </div>
  );
};

export default connect(({ list }) => ({
  list,
}))(ListPage);
