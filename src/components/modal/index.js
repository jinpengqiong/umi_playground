import { Row, Col, Divider, Button, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import ScoreForm from '../scoreForm'
import React, { useRef } from 'react';

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

  const [form] = Form.useForm();

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

  const handleData = (values, type) => {
    let sorceList = Object.keys(values).map(key => {
      let scoreId = {id: key}
      let item = values[key];
      let person = { ...scoreId, ...item }
      return person
    })
    let parameters;
    if (type) {
      parameters = {
        isSubmit: true,
        sorceList: sorceList
      }
    } else {
      parameters = {
        isSubmit: false,
        sorceList: sorceList
      }
    }
    console.log(parameters)
    // dispatch({
    //   type: 'details/getSumData',
    //   payload: parameters,
    // });
  }

  const handleClick = () => {
    handleData(form.getFieldsValue(), false)
    closeModal();
  };

  const onFinish = values => {
    handleData(values, true);
    closeModal();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
        <div className={styles.modalTitleWrapper}>
          <div className={styles.modalTitle + ' handle'}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;Score</span>
            <CloseOutlined className={styles.cross} onClick={handleCancel} />
          </div>
        </div>
        <div className={styles.divider} />
        <Form
          form={form}
          name="scoreForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row className={styles.modalContent}>
            <Col>
              <ScoreForm />
            </Col>
          </Row>
          <br />
          <div className={styles.divider} />
          <div className={styles.modalFooter}>
            <Form.Item>
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              &nbsp;&nbsp;
            </Form.Item>
          </div>
        </Form>
      </div>
    </Draggable>
  );
};

