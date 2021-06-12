import classes from './SvgBackground.module.scss';

const SvgBackground = () => {

  const patternSemiSize = 44;
  const one = {
    x: patternSemiSize,
    y: patternSemiSize
  };

  const loopRotationTransform = (angle, x, y) => {
    return <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            values={`-${angle} ${x} ${y}; ${angle} ${x} ${y}; -${angle} ${x} ${y}`}
            dur="3s" 
            repeatCount="indefinite" />;
  };

  return (
    <svg className={classes['svg-background']} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="emoji-pattern" patternUnits="userSpaceOnUse" width={patternSemiSize*2} height={patternSemiSize*2}>
        <text id="one" className={classes.emoji} {...one}>🍺{loopRotationTransform(45, one.x, one.y)}</text>
      </pattern>
    </defs>
      <rect width="100%" height="100%" fill="url(#emoji-pattern)" />
    </svg>
  );
}

export default SvgBackground;