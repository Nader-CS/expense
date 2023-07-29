import { useState } from "react";
import "./DeleteExpenses.css";
import "./DeletedForm";
import DeletedForm from "./DeletedForm";
const DeleteExpenses = (props) => {
  const changeIsDeleting = () => {
    props.editIsDeletingChange(true);
  };

  return (
    <div>
      {!props.isDeleting && (
        <button type="submit" onClick={changeIsDeleting}>
          Delete Items
        </button>
      )}
      {props.isDeleting && (
        <DeletedForm
          DeleteExpense={props.DeleteExpense}
          editIsDeletingChange={props.editIsDeletingChange}
        />
      )}
    </div>
  );
};

export default DeleteExpenses;
