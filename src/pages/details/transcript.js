import { useEffect } from 'react'
import { List } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import styles from './index.less';

export const TranscriptComponent = props => {
  let audioInst;
  useEffect(() => {
    audioInst = document.getElementById('myAudio');
  }, [])

  const play = time => {
    if (audioInst) {
      audioInst.currentTime = time;
      audioInst.play();
    }
  }
  const transcriptData = [
    {
      title: 'Agent',
      timestamp: 10,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Caller',
      timestamp: 20,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Agent',
      timestamp: 35,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Caller',
      timestamp: 40,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Agent',
      timestamp: 45,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Caller',
      timestamp: 48,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Agent',
      timestamp: 50,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Caller',
      timestamp: 60,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <div>
      <div>
        <div className={styles.sectionHeader}>
          <h2>Recording</h2>
          <div className={styles.scoreBox}>
            <span className={styles.title}>Overall Score</span>
            <span className={styles.result}>46</span>
          </div>
        </div>
        <br />
        <audio
          id="myAudio"
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
                      {item.title}&nbsp;&nbsp;&nbsp;
                      <a style={{ color: '#1890ff' }} onClick={() => play(item.timestamp)}>
                        {'00.' + item.timestamp}
                      </a>
                    </>
                  }
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

