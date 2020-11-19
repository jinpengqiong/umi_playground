import { connect } from 'dva';
// import styles from './index.less';
// import { formatMessage } from 'umi-plugin-locale';

const DetailsPage = ({ details, dispatch }) => {
  return <div>{String(details.sumData)}</div>;
};

export default connect(({ details }) => ({
  details,
}))(DetailsPage);
