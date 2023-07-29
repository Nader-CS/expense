import ExpensesForm from "./ExpensesForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    if (props.onAddExpense(expenseData)) {
      props.EditingChange(false);
    } else {
      props.EditingChange(true);
    }
  };
  const startEditingHandler = () => {
    props.EditingChange(true);
  };

  const stopEditingHandler = () => {
    props.EditingChange(false);
  };

  return (
    <div>
      {!props.isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {props.isEditing && (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
          setUniqueYears={props.setUniqueYears}
          uniqueYears={props.uniqueYears}
          setItems={props.setItems}
        />
      )}
    </div>
  );
};
export default NewExpense;
