import { useRef, useEffect } from 'react'
import { Row, Col, List, Avatar, Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';

import styles from './index.less';

export const TranscriptComponent = props => {
  const audioEl = useRef(null);
  let audioInst;
  useEffect(() => {
    audioInst = document.getElementById('myAudio');
  }, [])

  const play = (time) => {
    if (audioInst) {
      audioInst.currentTime = time;
      audioInst.play();
    }
  }
  const transcriptData = [
    {
      title: 'Agent',
      timestamp: 10,
    },
    {
      title: 'Caller',
      timestamp: 20,
    },
    {
      title: 'Agent',
      timestamp: 35,
    },
    {
      title: 'Caller',
      timestamp: 40,
    },
    {
      title: 'Agent',
      timestamp: 45,
    },
    {
      title: 'Caller',
      timestamp: 48,
    },
    {
      title: 'Agent',
      timestamp: 50,
    },
    {
      title: 'Caller',
      timestamp: 60,
    },
  ];
  return (
    <div>
      <div>
        <h2>Recording</h2>
        <br />
        <audio
          id="myAudio"
          ref={audioEl}
          src="http://audio.muzhifm.com/IarFile/Songs/5/bd27173472784b4a8006528095155c63.mp3"
          controls
          preload="http://audio.muzhifm.com/IarFile/Songs/5/bd27173472784b4a8006528095155c63.mp3"
          controlsList="nodownload"
        ></audio>
      </div>
      <br />
      <div>
        <h2>Transcript</h2>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={transcriptData}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<SmileTwoTone style={{ fontSize: '30px' }} />}
                  title={
                    <>
                      <a href="https://ant.design">{item.title}</a>&nbsp;&nbsp;&nbsp;
                      <a style={{ color: '#1890ff' }} onClick={() => play(item.timestamp)}>
                        {'00.' + item.timestamp}
                      </a>
                    </>
                  }
                  description="djasldjlasjdklajsldkjaskljdlkasjdlkjaskldjkasjdklasjkldjaskldjkasjdkasjdklajsdlkjasldjasjdlasjdlas"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

