import classes from './AmPmIndicator.module.scss';

const AmPmIndicator = () => {
  return (
    <div className={classes.container}>
      <span className={`${classes.am} ${classes.legend}`}>AM</span>
      <span className={`${classes.pm} ${classes.legend}`}>PM</span>
      <span className={classes.dot}></span>
    </div>
  );
}

export default AmPmIndicator;