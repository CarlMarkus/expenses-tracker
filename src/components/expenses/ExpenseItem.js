import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//expension date vi sender prop's fra App til expension date.
//vi må gå gjennom denne får de prop'en blir først satt i <ExpensaDate date = > </ExpensaDate>

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  console.log(
    "ExpenseItem evaluated by react. Dette skjer 4 ganger når siden lastes fordi vi laster inn 4 components"
  );

  /*

  const clickHandler = () => {
    setTitle("yo");
  };

  */

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} NOK</div>
      </div>
      {/*<button onClick={clickHandler}>Change title</button> */}
    </div>
  );
}

export default ExpenseItem;
