import classes from './Bubbles.module.scss';

const RADIUSES = [6, 8, 10, 12, 17, 20];
const NUM_OF_BUBBLES = 150;

const randomRadius = () => {
  const randomIndex = Math.floor(Math.random() * RADIUSES.length);
  return RADIUSES[randomIndex];
}

const Bubbles = () => {
  let radiuses = [];
  for (let i = 0; i <= NUM_OF_BUBBLES; i++) {
    radiuses.push(randomRadius());
  }

  const bubbles = radiuses.map(r => {
    return (
      <div 
        style={{
          height: `${r}px`, 
          width: `${r}px`,
          left: `${Math.floor(Math.random() * 100)}%`,
          animationDuration: `${5 + Math.floor(Math.random() * 10)}s`,
          animationDelay: `${Math.floor(Math.random() * 10)}s`,
        }} 
        className={classes['bubble-container']}
      >
        <span 
          style={{
            height: `${r}px`, 
            width: `${r}px`,
            animationDelay: `${Math.floor(Math.random() * 2)}s`,
            animationDuration: `${Math.random() + .6}s`
          }} 
          className={classes.bubble} 
        />
      </div>
    )
  });
  return <div className={classes.bubbles}>
    {bubbles}
  </div>;
};

export default Bubbles;