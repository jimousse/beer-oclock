import PropTypes from 'prop-types'
import classes from './Digit.module.scss';

const Digit = ({signals = '0000000', letter}) => {
  const powerClasses = signals.split('').map(v => Number(v) ? classes.on : classes.off);
  const classNames = [
    `${classes.segment} ${classes.one} ${classes.horizontal} ${powerClasses[0]} ${classes[letter]}`,
    `${classes.segment} ${classes.two} ${classes.vertical} ${powerClasses[1]} ${classes[letter]}`,
    `${classes.segment} ${classes.three} ${classes.vertical} ${powerClasses[2]} ${classes[letter]}`,
    `${classes.segment} ${classes.four} ${classes.horizontal} ${powerClasses[3]} ${classes[letter]}`,
    `${classes.segment} ${classes.five} ${classes.vertical} ${powerClasses[4]} ${classes[letter]}`,
    `${classes.segment} ${classes.six} ${classes.vertical} ${powerClasses[5]} ${classes[letter]}`,
    `${classes.segment} ${classes.seven} ${classes.horizontal} ${powerClasses[6]} ${classes[letter]}`
  ];

  return (
    <div className={classes.digit}>
      {classNames.map(c => <div className={c} />)}
    </div>
  );
};

Digit.propTypes = {
  signals: PropTypes.array
}

export default Digit;