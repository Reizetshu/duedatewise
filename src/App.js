// Packages
import {Routes, Route} from 'react-router';
import { useSelector } from 'react-redux';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Homepage';
import AddBills from './pages/AddBills';
import PendingBills from './pages/PendingBills';
import PaidBills from './pages/PaidBills';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

const App = () => {
  
  // Calling allBills on the reducer
  const bills = useSelector( state => state.allBills);

  // Filtering Pending Bills
  const allPendingBills = bills.filter(bill => bill.status.toUpperCase() === 'PENDING');

  // Filtering Paid Bills
  const allPaidBills = bills.filter(bill => bill.status.toUpperCase() === 'PAID');

  return (
    <>
      {/* Calling the component Header */}
      <Header />
      {/* Routing Paths */}
      <Routes>
      <Route path='/' element={<HomePage
        allPendingBills = {allPendingBills}
        allPaidBills = {allPaidBills} />} />
      <Route path='/add-bills' element={<AddBills />} />
      <Route path='/pending-bills' element={ 
      <PendingBills
        allPendingBills = {allPendingBills} />} />
      <Route path='/paid-bills' element={ 
      <PaidBills 
        allPaidBills = {allPaidBills}/>} />
      <Route path='/login' element={
        <LogIn />} />
      <Route path='/register' element={
        <Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
