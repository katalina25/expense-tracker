import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload)
            }

        default:
            return state;
    }
}