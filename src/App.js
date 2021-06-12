import { Fragment } from 'react';
import Clock from './components/clock/Clock';
import SvgBackground from './components/svg-background/SvgBackground';
import './App.scss';

function App() {
  return (
    <Fragment>
      <SvgBackground />
      <Clock />
    </Fragment>
  );
}

export default App;
