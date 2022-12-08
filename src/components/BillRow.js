import { useDispatch } from 'react-redux';

import '../assets/styles/BillRow.css';


const BillRow = ({timeCreated, dateCreated, name, amount, dueDate, planToPay, status}) => {
    const dispatch = useDispatch();

    const onPaidClickHandler = () => {
        const confirmbox = window.confirm('This will add to the paid bill list!')
        if (confirmbox === true) {
            dispatch({ type: 'PAID', payload: {name: name}})
        }
    }

    const onRemoveClickHandler = () => {
        const confirmbox = window.confirm('This will remove to the bill list!')
        if (confirmbox === true) {
            dispatch({ type: 'REMOVE', payload: {name: name}})
        }
    }

    const onUndoClickHandler = () => {
        const confirmbox = window.confirm('This will be back to the pending bill list!')
        if (confirmbox === true) {
            dispatch({ type: 'UNDO', payload: {name: name}})
        }
    }

  return (
        <tr>
            <td>
                <span>{timeCreated}</span>
            </td>
            <td>
                <span>{dateCreated}</span>
            </td>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>&#8369;{amount}</span>
            </td>
            <td>
                <span>{dueDate}</span>
            </td>
            <td>
                <span>{planToPay}</span>
            </td>
            <td className='buttons'>
                {
                    status === 'PENDING' &&
                    <button className='paid'
                     onClick = {onPaidClickHandler}>
                        Paid
                    </button>
                }
                {
                    status === 'PAID' &&
                    <button className='undo' 
                    onClick = {onUndoClickHandler}>
                        Undo
                    </button>
                }
                <button className='remove' 
                onClick={onRemoveClickHandler}>
                    Remove
                </button>
            </td>
        </tr>
  )
}

export default BillRow;