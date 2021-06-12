import classes from './Seperator.module.scss';

const Seperator = () => {
  return (
    <div className={classes.seperator}>
      <div className={classes.dot} />
      <div className={classes.dot} />
    </div>
  );
};

export default Seperator;