import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showform,SetShowFormValue]=useState(false);
  const ShowFormHandler=()=>{
      SetShowFormValue(true);
  }
  const HideFormHandler=()=>{
    SetShowFormValue(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {!showform&&<button onClick={ShowFormHandler}>Add New Expense</button>}
      {showform&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onclickcancel={HideFormHandler} />}
    </div>
  );
};

export default NewExpense;
