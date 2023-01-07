import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//expension date vi sender prop's fra App til expension date.
//vi må gå gjennom denne får de prop'en blir først satt i <ExpensaDate date = > </ExpensaDate>

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  console.log(
    "ExpenseItem evaluated by react. Dette skjer X ganger når siden lastes fordi vi laster inn X components"
  );

  const [isVisible, setIsVisible] = useState(true);

  const clickHandler = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} NOK</div>
      </div>
      {<button onClick={clickHandler}>Delete</button>}
    </div>
  ) : null;
}

export default ExpenseItem;
