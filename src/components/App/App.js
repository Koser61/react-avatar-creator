import React from 'react';
import Home from '../Home/Home';
import Creator from '../Creator/Creator';
import Contact from '../Contact/Contact';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/creator' component={Creator} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/creator/:hairColor/:eyesColor/:topColor/' render={(props) => <Creator {...props} />} />
        <Route path='/creator/:hairColor/:eyesColor' render={(props) => <Creator {...props} />} />
        <Route path='/creator/:hairColor' render={(props) => <Creator {...props} />} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;