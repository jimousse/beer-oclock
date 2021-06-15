import { Fragment } from 'react';
import Clock from './components/clock/Clock';
import SvgBackground from './components/svg-background/SvgBackground';
import Bubbles from './components/bubbles/Bubbles';
import Foam from './components/foam/Foam';
import './App.scss';

function App() {
  return (
    <Fragment>
      <SvgBackground />
      <Bubbles />
      <Foam />
      <Clock />
    </Fragment>
  );
}

export default App;
