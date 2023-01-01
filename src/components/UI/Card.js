import "./Card.css";

function Card(props) {
  //props.className = her får vi expense-item styling og expenses styling som props
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
