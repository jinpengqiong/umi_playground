import { Row, Col, Divider, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';

import styles from './index.less'

export const ModalComponent = (props) => {
  console.log('props', props)
  const { dispatch, modalVisible } = props;
  console.log('styles.modalContainer', styles.modalContainer)
  // const handleStart = (e, data) => {
  //   console.log('handleStart Event: ', e);
  //   console.log('handleStart Data: ', data);
  // }
  // const handleDrag = (e, data) => {
  //   console.log('handleDrag Event: ', e);
  //   console.log('handleDrag Data: ', data);
  // };
  // const handleStop = (e, data) => {
  //   console.log('handleStop Event: ', e);
  //   console.log('handleStop Data: ', data);
  // };
  const handleCancel = () => {
    dispatch({
      type: 'details/updateState',
      payload: {
        modalVisible: false
      },
    });
  }
  const containerStyle = modalVisible ? styles.modalContainer : styles.modalContainerHidden;
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      // grid={[10, 10]}
      scale={1}
      // onStart={handleStart}
      // onDrag={handleDrag}
      // onStop={handleStop}
    >
      <div className={containerStyle}>
        <br />
        <Row className={styles.modalTitle + ' handle'}>
          <Col span={23}>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Score</h2>
          </Col>
          <Col span={1}>
            <CloseOutlined className={styles.cross} onClick={handleCancel} /> &nbsp;&nbsp;
            &nbsp;&nbsp;
          </Col>
        </Row>
        <div className={styles.divider} />
        <Row className={styles.modalContent}>
          <Col>Content</Col>
        </Row>
        <div className={styles.divider} />
        <div className={styles.modalFooter}>
          <Button type="primary">Cancel</Button>&nbsp;&nbsp;
          <Button type="primary">Save As PDF</Button>&nbsp;&nbsp;
          <Button type="primary">Submit</Button>&nbsp;&nbsp;
        </div>
      </div>
    </Draggable>
  );
};

