import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction: { text, amount } }) => {
    const { }
    const sign = amount < 0 ? '-' : '+';



    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text}
            <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
