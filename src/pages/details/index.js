import { ModalComponent } from '../../components/modal';
import { TranscriptComponent } from './transcript';
import { connect } from 'dva';
import ProCard from '@ant-design/pro-card';
import { Row, Col, Button, Tooltip, Modal } from 'antd';
import { DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less'
const { Divider } = ProCard;
// import styles from './index.less';
// import { formatMessage } from 'umi-plugin-locale';

const DetailsPage = ({ details, dispatch }) => {
  const { modalVisible, modalDraggableDisabled } = details;
  const handleOk = e => {
    dispatch({
      type: 'details/updateState',
      payload: {
        modalVisible: false,
      },
    });
  };
  const handleCancel = e => {
    console.log('e', e);
    dispatch({
      type: 'details/updateState',
      payload: {
        modalVisible: false,
      },
    });
  };
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
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            Agent
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
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
      <ProCard style={{ marginTop: 8 }} gutter={8}>
        <ProCard colSpan={{ xs: 5, sm: 6, md: 6, lg: 6, xl: 6 }} layout="left">
          <Row>
            <Col span={24}>
              <h3>Contact Summary</h3>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={10}>Date/Time:</Col>
            <Col span={14}>October 210,2020 10:30 AM UTC</Col>
          </Row>
          <Row>
            <Col span={10}>Entity Recognizer Name:</Col>
            <Col span={14}>Micheal</Col>
          </Row>
          <Row>
            <Col span={10}>Language Code:</Col>
            <Col span={14}>en-US</Col>
          </Row>
          <Row>
            <Col span={10}>Agent Sentiment:</Col>
            <Col span={14}>
              <div>Overall negative;</div>
              <div>trending down</div>
            </Col>
          </Row>
        </ProCard>
        <Divider />
        <ProCard colSpan={{ xs: 5, sm: 6, md: 6, lg: 6, xl: 6 }} layout="left">
          <Row>
            <Col span={24}>
              <h3>Source Information</h3>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={10}>Type:</Col>
            <Col span={14}>Voice Transcription</Col>
          </Row>
          <Row>
            <Col span={10}>Job Name:</Col>
            <Col span={14}>2020102632523535.mp3</Col>
          </Row>
          <Row>
            <Col span={10}>File Format:</Col>
            <Col span={14}>mp3</Col>
          </Row>
          <Row>
            <Col span={10}>Call Duration:</Col>
            <Col span={14}>77:04</Col>
          </Row>
          <Row>
            <Col span={10}>Sample Rate:</Col>
            <Col span={14}>8000</Col>
          </Row>
          <Row>
            <Col span={10}>Custom Vocabulary:</Col>
            <Col span={14}>77:04</Col>
          </Row>
          <Row>
            <Col span={10}>Word Accuracy:</Col>
            <Col span={14}>96.7%</Col>
          </Row>
        </ProCard>
        <Divider />
        <ProCard colSpan={{ xs: 14, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center">
          Col
        </ProCard>
      </ProCard>
      <ProCard style={{ marginTop: 8 }} gutter={8} title="">
        <ProCard layout="left" style={{ height: '43vh', overflow:'scroll' }}>
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
