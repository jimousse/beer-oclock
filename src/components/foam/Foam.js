import classes from './Foam.module.scss';

const Foam = () => {
  return <div className={classes.container}>
    <div className={classes.foam} />
    <div className={classes.before} />
    <div className={classes.after} />
  </div>
}

export default Foam;