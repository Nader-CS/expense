import { useState } from "react";
import "./DeletedForm.css";
const DeletedForm = (props) => {
  const [enteredDeletedExpense, setEnteredDeletedExpense] = useState("");
  const [deleteSuccessfully, setDeleteSuccessfully] = useState(false);
  const deletedExpenseChangeHandler = (e) => {
    setEnteredDeletedExpense(e.target.value.toLowerCase());
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!props.DeleteExpense(enteredDeletedExpense)) {
      setDeleteSuccessfully(true);
    } else {
      setDeleteSuccessfully(false);
      setEnteredDeletedExpense("");
    }
  };
  const cancelHandler = () => {
    props.editIsDeletingChange(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="delete-expense__controls">
        <div className="delete-expense__control">
          <label>Expense Name</label>
          <input
            type="text"
            onChange={deletedExpenseChangeHandler}
            value={enteredDeletedExpense}
          />
        </div>
      </div>
      {deleteSuccessfully && (
        <div className="warning">
          <p style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
            Not found
          </p>
        </div>
      )}
      <div className="delete-expense__actions">
        <button type="submit">Delete Expense</button>
        <button type="submit" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DeletedForm;
