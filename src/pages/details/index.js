import { ModalComponent } from '../../components/modal';
import { TranscriptComponent } from './transcript';
import { SummaryPage } from './summary';
import { connect } from 'dva';
import ProCard from '@ant-design/pro-card';
import { Button, Tooltip } from 'antd';
import { DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
// import styles from './index.less';
// import { formatMessage } from 'umi-plugin-locale';

const DetailsPage = ({ details, dispatch }) => {
  const { modalVisible, summaryData } = details;
  const openModal = () => {
    dispatch({
      type: 'details/updateState',
      payload: {
        modalVisible: true,
      },
    });
  };
  const modalProps = { modalVisible, dispatch };
  const transcriptProps = { ...details, dispatch }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            style={{
              backgroundColor: 'rgba(255, 99, 132, 1)',
              borderColor: 'rgba(255, 99, 132, 1)',
            }}
          >
            Agent
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            style={{
              backgroundColor: 'rgba(54, 162, 235, 1)',
              borderColor: 'rgba(54, 162, 235, 1)',
            }}
          >
            Caller
          </Button>
        </div>
        <div>
          <Tooltip title="Previous entry">
            <Button shape="circle" icon={<LeftOutlined />} />
          </Tooltip>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Tooltip title="Next entry">
            <Button shape="circle" icon={<RightOutlined />} />
          </Tooltip>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" shape="round" onClick={openModal}>
            Score
          </Button>
        </div>
      </div>
      <br />
      <SummaryPage />
      <ProCard style={{ marginTop: 8 }} gutter={8} title="">
        <ProCard layout="left" style={{ height: '43vh', overflow: 'scroll' }}>
          <TranscriptComponent {...transcriptProps} />
        </ProCard>
      </ProCard>
      <ModalComponent {...modalProps} />
    </>
  );
};

export default connect(({ details }) => ({
  details,
}))(DetailsPage);
