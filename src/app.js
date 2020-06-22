import React, {
  useState,
} from 'react';
import Hero from './components/hero';
import './global.css';
import Timeline from './components/timeline';
import styles from './app.module.css';
import Hamburger from './components/hamburger';
import Modal from './components/modal';
import TechStack from './components/techStack';
import Footer from './components/footer';
import {
  WORK_TIMELINE,
  EDUCATION_TIMELINE
} from './utilities/config'

const App = () => {
  const [modalVisible, setmodalVisible] = useState(false);

  return (
    <div className={styles.mainApp}>
      <Modal modalVisible={modalVisible} onClose={() => setmodalVisible(false)} />
      <Hamburger onClick={() => setmodalVisible(!modalVisible)} modalOpen={modalVisible} />
      <Hero />
      <div style={{ paddingTop: '200vh', backgroundColor: '#fff' }}>
        <div>
          <Timeline {...WORK_TIMELINE} />
        </div>
        <div>
          <Timeline reverse {...EDUCATION_TIMELINE} />
        </div>
        <TechStack />
        <Footer />
      </div>
    </div>
  );
};

export default App;