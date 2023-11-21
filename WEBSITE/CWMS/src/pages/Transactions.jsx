/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import Navbar from '../components/Navbar';

function Transactions() {
  const location = useLocation();
  const id = location.state;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data, error } = await supabase
          .from('transaction')
          .select('amount', 'timestamp')
          .eq('userid', id);

        if (error) {
          throw error;
        }

        setTransactions(data || []);
        console.log(transactions)
      } catch (error) {
        console.error('Error fetching transaction data:', error.message);
      }
    };

    fetchTransactions();
  }, [id]);

  return (
    <div>
      <Navbar />
      <section className="transactions">
        <h2>Recent Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.timestamp}>
              <p>Amount: {transaction.amount}</p>
              <p>Timestamp: {transaction.timestamp}</p>
            </li>
          ))}
        </ul>
        <br />
      </section>
    </div>
  );
}

export default Transactions;
