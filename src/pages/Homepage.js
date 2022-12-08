//Packages
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Component
import AllBillRow from '../components/AllBillRow';

// Style
import '../assets/styles/Homepage.css';

// Image
import payment from '../assets/payment.png';

// Homepage function
const Homepage = ({allPendingBills, allPaidBills}) => {

  // Calling allBills
  const bills = useSelector( state => state.allBills);

  // States
  const [filterByName, setFilterByName] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);

  // Show and filter all pendingBills
  const pendingBills = allPendingBills.filter(bill => {
    if (filterByName === '') {
      return bill;
    }
    else if (bill.name.toUpperCase().includes(filterByName.toUpperCase())) {
      return bill;
    }
  })
  .map( bill => {
    return <AllBillRow
              key = {bill.name}
              timeCreated = {bill.timeCreated}
              dateCreated = {bill.dateCreated}
              name = {bill.name}
              amount = {bill.amount}
              dueDate = {bill.dueDate}
              planToPay = {bill.planToPay}
              status = {bill.status} />
  });

  // Show and filter all paidBills
  const paidBills = allPaidBills.filter(bill => {
    if (filterByName === '') {
      return bill;
    }
    else if (bill.name.toUpperCase().includes(filterByName.toUpperCase())) {
      return bill;
    }
  })
  .map( bill => {
    return <AllBillRow
                    key = {bill.name}
                    timeCreated = {bill.timeCreated}
                    dateCreated = {bill.dateCreated}
                    name = {bill.name}
                    amount = {bill.amount}
                    dueDate = {bill.dueDate}
                    planToPay = {bill.planToPay}
                    status = {bill.status} />
                  });

  //   // Calculate all total
  //   let allTotal = 0;
  //   bills.map( bill => {
  //     allTotal = parseFloat(allTotal) + parseFloat(bill.amount)
  //   }
  // );

  // Calculate Sub-Total
  useEffect(() => {
    setRunningTotal( bills.filter( bill => 
      bill.name.toUpperCase()
      .includes(filterByName.toUpperCase()))
      .reduce((accum, current) => {
      return accum + current.amount
    },0));
  }, [filterByName]);

  return (
    <>
      <main>
        <div className='logo-title'>
          <div className='innerlogotitle'>
          <h2 className='title'>"Let's Plan Due Dates Wisely!"</h2>
          </div>
          <input 
            type='text' 
            placeholder='Search Bill Name...' 
            value={filterByName}
            onChange={e => setFilterByName(e.target.value)}  
          />
        </div>
        <div className='home-total'>
          <p>Total: &#8369;{runningTotal}</p>
          {/* <p>All Total: &#8369;{allTotal}</p> */}
        </div>
        <table>
          <tr>
              <td className='home-table'>
                  <p>Time Created</p>
              </td>
              <td className='home-table'>
                  <p>Date Created</p>
              </td>
              <td className='home-table'>
                  <p>Bill Name</p>
              </td>
              <td className='home-table'>
                  <p>Amount Due</p>
              </td>
              <td className='home-table'>
                  <p>Due Date</p>
              </td>
              <td className='home-table'>
                  <p>Plan To Pay</p>
              </td>
              <td className='home-table'>
                  <p>Status</p>
              </td>
          </tr>
            {pendingBills}
            {paidBills}
        </table>
        {/* If the are no Bill/s */}
        {
          (allPaidBills.length === 0 && 
          allPendingBills.length === 0) && 
          <h3> No History Bill/s</h3>
        }
      </main>
    </>
  )
}

export default Homepage;