import { ChartComponent } from './chart';
import styles from './index.less';
import ProCard from '@ant-design/pro-card';
import { Row, Col } from 'antd';
const { Divider } = ProCard;
// import { formatMessage } from 'umi-plugin-locale';

export const SummaryPage = props => {
  return (
    <ProCard style={{ marginTop: 8, minHeight: '25vh' }} gutter={8}>
      <ProCard colSpan={{ xs: 5, sm: 6, md: 6, lg: 6, xl: 6 }} layout="left">
        <Row className={styles.rowItem}>
          <Col span={24}>
            <h3>Contact Summary</h3>
          </Col>
        </Row>
        <br />
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Date/Time:</strong>
          </Col>
          <Col span={14}>October 210,2020 10:30 AM UTC</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Entity Recognizer Name:</strong>
          </Col>
          <Col span={14}>Micheal</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Language Code:</strong>
          </Col>
          <Col span={14}>en-US</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Agent Sentiment:</strong>
          </Col>
          <Col span={14}>
            <div>Overall negative;</div>
            <div>trending down</div>
          </Col>
        </Row>
      </ProCard>
      <ProCard colSpan={{ xs: 5, sm: 6, md: 6, lg: 6, xl: 6 }} layout="left">
        <Row>
          <Col span={24}>
            <h3>Source Information</h3>
          </Col>
        </Row>
        <br />
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Type:</strong>
          </Col>
          <Col span={14}>Voice Transcription</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Job Name:</strong>
          </Col>
          <Col span={14}>2020102632523535.mp3</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>File Format:</strong>
          </Col>
          <Col span={14}>mp3</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Call Duration:</strong>
          </Col>
          <Col span={14}>77:04</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Sample Rate:</strong>
          </Col>
          <Col span={14}>8000</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Custom Vocabulary:</strong>
          </Col>
          <Col span={14}>77:04</Col>
        </Row>
        <Row className={styles.rowItem}>
          <Col span={10}>
            <strong>Word Accuracy:</strong>
          </Col>
          <Col span={14}>96.7%</Col>
        </Row>
      </ProCard>
      <ProCard colSpan={{ xs: 14, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center">
        <ChartComponent />
      </ProCard>
    </ProCard>
  );
};

