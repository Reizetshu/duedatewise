const initialState = {
    allBills: [
        {
            timeCreated: '4:14:42 PM',
            dateCreated: 'Fri Oct 28 2022',
            name: 'PLDTNOV',
            amount: 1699,
            dueDate: '2022-11-20',
            planToPay: '2022-11-18',
            status: 'PAID'
        },
        {
            timeCreated: '5:22:52 AM',
            dateCreated: 'Fri Oct 28 2022',
            name: 'GLOBENOV',
            amount: 999,
            dueDate: '2022-11-22',
            planToPay: '2022-11-18',
            status: 'PAID'
        },
        {
            timeCreated: '12:00:00 AM',
            dateCreated: 'Tue Nov 29 2022',
            name: 'PLDTDEC',
            amount: 1699,
            dueDate: '2022-12-20',
            planToPay: '2022-12-18',
            status: 'PENDING',
        },
        {
            timeCreated: '12:02:36 AM',
            dateCreated: 'Tue Nov 29 2022',
            name: 'GLOBEDEC',
            amount: 999,
            dueDate: '2022-12-22',
            planToPay: '2022-12-18',
            status: 'PENDING',
        }
    ],
    allUsers: []
};


const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD':
            const date = new Date();
            const currentDate = date.toDateString();
            const currentTime = date.toLocaleTimeString();
            let newBills = {
                timeCreated: currentTime,
                dateCreated: currentDate,
                name: action.payload.name.toUpperCase(),
                amount: parseFloat(action.payload.amount),
                dueDate: action.payload.dueDate,
                planToPay: action.payload.planToPay,
                status: action.payload.status
            };
            return {...state, allBills: [...state.allBills, newBills]};
        case 'REMOVE':
            return {...action, allBills: state.allBills.filter(bill => bill.name !== action.payload.name)
            };
        case 'PAID':
            let currentBills1 = state.allBills;
            for( let index = 0; index < currentBills1.length; index++) {
                if(currentBills1[index].name === action.payload.name) {
                    currentBills1[index].status = 'PAID';
                }
            }
            return {...state, allBills: [...currentBills1] };
        case 'UNDO':
            let currentBills2 = state.allBills;
            for( let index = 0; index < currentBills2.length; index++) {
                if(currentBills2[index].name === action.payload.name) {
                    currentBills2[index].status = 'PENDING';
                }
            }
            return {...state, allBills: [...currentBills2] };
        default:
            return state;
    }
}
export default reducer;