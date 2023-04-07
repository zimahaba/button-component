import classes from './Button.module.css';

const Button = props => {

  let variant = (props.variant !== undefined && props.variant !== '') ? props.variant : 'default';
  const sizeClass = (props.size !== undefined && props.size !== '') ? 'size_' + props.size : 'size_m';
  const boxShadow = (props.disableShadow !== undefined || props.disabled) ? '' : variant + '_box_shadow';
  
  if (props.disabled) {
    variant = variant + '_disabled';
  }

  return (
    <button onClick={props.onClick} className={`${classes[variant]} ${classes[sizeClass]} ${classes[boxShadow]}`} disabled={props.disabled}>{props.children}</button>
  );
};

export default Button;