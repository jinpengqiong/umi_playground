import { Row, Col, Divider, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';

import styles from './index.less'

export const ModalComponent = (props) => {
  const { dispatch, modalVisible } = props;
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
  const closeModal = () => {
    dispatch({
      type: 'details/updateState',
      payload: {
        modalVisible: false,
      },
    });
  }
  const handleCancel = () => {
    closeModal()
  }
  const handleClick = type => {
    closeModal();
  };
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
        <div className={styles.modalTitle + ' handle'}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Score</h2>
          <CloseOutlined className={styles.cross} onClick={handleCancel} />
        </div>
        <div className={styles.divider} />
        <Row className={styles.modalContent}>
          <Col>Content</Col>
        </Row>
        <div className={styles.divider} />
        <div className={styles.modalFooter}>
          <Button type="primary" onClick={() => handleClick('cancel')}>
            Cancel
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={() => handleClick('saveForLater')}>
            Save for Later
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={() => handleClick('save')}>
            Save As PDF
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={() => handleClick('submit')}>
            Submit
          </Button>
          &nbsp;&nbsp;
        </div>
      </div>
    </Draggable>
  );
};

