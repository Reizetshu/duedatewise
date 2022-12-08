// Packages
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

// Styling
import '../assets/styles/AddBills.css';

// Adding bills function
const AddBills = () => {

  // Calling allBills
  const allBills = useSelector(state => state.allBills);
  // Calling dispatch
  const dispatch = useDispatch();

  // Navigate
  const navigator = useNavigate();

  // States
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState(0);
  const [billDueDate, setBillDueDate] = useState({due: new Date()});
  const [billPlanToPay, setBillPlanToPay] = useState({due: new Date()});
  const [hasError, setHasError] = useState( false );
  const [errorMessage, setErrorMessage] = useState('');

  // on Bill Handlers
  const onBillNameChangeHandler = event => {
    setBillName(event.target.value);
  }
  const onBillAmountChangeHandler = event => {
    setBillAmount(event.target.value);
  }
  const onBillDueDateChangeHandler = event => {
    setBillDueDate(event.target.value);
  }
  const onBillPlanToPayChangeHandler = event => {
    setBillPlanToPay(event.target.value);
  }

  // Submit Form Handler
  const onSubmitFormHandler = event => {
    // Prevent from reloading
    event.preventDefault();

    // // Bill name already exist
    if(allBills.filter( bill => 
      bill.name.trim().toUpperCase() === billName.trim().toUpperCase()).length !==0) {
        setHasError( true );
        setErrorMessage('Bill is already exist! Please try again.');
      }
      // Adding all input
    else {
        alert(`You Have Added The Bill ${billName.toUpperCase()}!`);
        dispatch({type: 'ADD', payload: {
          name: billName,
          amount: billAmount,
          dueDate: billDueDate,
          planToPay: billPlanToPay,
          status: 'PENDING'
        }
      })
      // Resetting Form
      setHasError( false );
      setErrorMessage('');
      setBillName('');
      setBillAmount('');
      setBillDueDate('');
      setBillPlanToPay('');
      // Going back to homepage
      navigator('/');
    }
}

  return (
    <>
      <form onSubmit = {onSubmitFormHandler}>
      <h1 className='bill-name'>Adding Bills</h1>
      <p>
        Note:
      </p>
      <p>
      Recommended naming format for easy search. First name of bill, second is the month, and last is the year.
      </p>
      <p>
      Ex. BILLMONTH2022
      </p>
        <h3>Bill Name</h3>
        <input
        type = 'text'
        value = {billName}
        onChange = {onBillNameChangeHandler}
        required
        />
        <h3>Amount Due</h3>
        <input
        type = 'number'
        value = {billAmount}
        min = '1'
        onChange = {onBillAmountChangeHandler}
        required
        />
        <h3>Due Date</h3>
        <input
        type = 'date'
        placeholder = 'dd-mm-yyyy'
        value = {billDueDate}
        onChange = {onBillDueDateChangeHandler}
        required
        />
        <h3>Plan To Pay</h3>
        <input
        type = 'date'
        placeholder = 'dd-mm-yyyy'
        value = {billPlanToPay}
        onChange = {onBillPlanToPayChangeHandler}
        required
        />
            {/* Conditional rendering for error */}
            { hasError &&
            <small className='error'>{errorMessage}</small> }
            <button type='submit'>
                + Add Bill
            </button>
      </form>
    </>
  )
}

export default AddBills;