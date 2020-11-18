import { connect } from 'dva';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';

const ListPage = ({ list, dispatch }) => {
  return <div>{list.hithere}</div>;
};

export default connect(({ list }) => ({
  list,
}))(ListPage);
