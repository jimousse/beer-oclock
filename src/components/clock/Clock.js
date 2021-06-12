import classes from './Clock.module.scss';
import Digit from './digit/Digit';
import Seperator from './seperator/Seperator';
import AmPmIndicator from './am-pm-indicator/AmPmIndicator';

const Clock = props => {
  return (
    <div className={classes.clock}>
      <AmPmIndicator />
      <Digit signals="1111111" letter={"b"} />
      <Digit signals="1101101" />
      <Seperator />
      <Digit signals="1101101" />
      <Digit signals="1111110" letter={"r"} />
    </div>
  );
};

export default Clock;