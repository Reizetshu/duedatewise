// Component
import BillRow from '../components/BillRow';

// Style
import '../assets/styles/PaidBills.css';

// PaidBills Function
const PaidBills = ({allPaidBills}) => {

  let paidTotal =  0;
  // Calculate paid bills
  const paidBills = allPaidBills.map( bill => {
    paidTotal = parseFloat(paidTotal) + parseFloat(bill.amount);

    return <BillRow
                    key = {bill.name}
                    timeCreated = {bill.timeCreated}
                    dateCreated = {bill.dateCreated}
                    name = {bill.name}
                    amount = {bill.amount}
                    dueDate = {bill.dueDate}
                    planToPay = {bill.planToPay}
                    status = {bill.status} />
                  })
  
  return (
    <>
      <main className='main-paid'>
        <div>
          <h1 className='paid-bills'>Paid Bills</h1>
          <p className='paid-total'>Paid Total: {paidTotal}</p>
        </div>
        <table>
          <tr>
              <td className='paid-total'>
                  <p>Time Created</p>
              </td>
              <td className='paid-total'>
                  <p>Date Created</p>
              </td>
              <td className='paid-total'>
                  <p>Bill Name</p>
              </td>
              <td className='paid-total'>
                  <p>Amount Due</p>
              </td>
              <td className='paid-total'>
                  <p>Due Date</p>
              </td>
              <td className='paid-total'>
                  <p>Plan To Pay</p>
              </td>
              <td className='paid-total'>
                  <p>Options</p>
              </td>
          </tr>
          {paidBills}
      </table>
      {/* If the are no Paid Bill/s */}
      {
        (allPaidBills.length === 0 ) && 
        <h3> No Paid Bill/s</h3>
      }
    </main>
    </>
  )
}

export default PaidBills;