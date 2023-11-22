import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const id = location.state.user.id;
  // console.log(id);
  const [userData, setUserData] = useState("");
  const [wallet, setWallet] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const { data: userData, error: userError } = await supabase
            .from("user")
            .select("*")
            .eq("userid", id)
            .single();

          const { data: walletData, error: walletError } = await supabase
            .from('wallet')
            .select('*')
            .eq('userid', id)
            .single();

          if (userError) {
            throw userError;
          }
          setWallet(walletData)
          setUserData(userData);
          console.log(walletData)

          if (!walletData || walletData.length === 0) {
            const walletId = uuidv4();
            console.log(walletId)
            const { data: newWallet, error: newWalletError } = await supabase
            .from('wallet')
            .insert([
              {
                userid: id,
                walletid: walletId,
                balance: 1000,
                walletname: 'Primary Wallet'
              },
            ]);

            if (newWalletError) {
              console.error('Error creating wallet:', newWalletError.message);
              return;
            }
            setWallet(walletId)
            console.log(newWallet)
          }
          if (walletError) {
            throw walletError;
          }
          

        } catch (error) {
          console.log(error.message);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      {id ? (
        <div>
          <section className="hero">
            <div className="card">
              <h2>Welcome MR {userData?.firstname}</h2>
              <p>Cryptocurrency Wallet Is Active.</p>
              <p>Your wallet ID is: {wallet.walletid}</p>
            </div>
          </section>
          <section className="wallet">
            <div className="card">
              <h2>Your Wallet</h2>
              <div className="wallet-info">
                <p>
                  <strong>Balance:</strong> {wallet.balance}
                </p>
                <p>
                  <strong>Address:</strong> {wallet.walletid}
                </p>
              </div>
              <div className="wallet-actions">
                <p>Send BTC</p>
                <p>Receive BTC</p>
              </div>
              <br></br>
              <button onClick={()=> navigate('/wallet', {state: wallet})}>View</button>
            </div>
          </section>

          <section className="search">
            <div className="card">
              <h2>View Cryptocurrencies</h2>
              <br></br>
              <Link to="/searchcrypto" className="view-button">
                View
              </Link>
            </div>
          </section>

          <section className="buy-sell">
            <div className="card">
              <h2>Buy/Sell Cryptocurrencies</h2>
              <div className="crypto-list">
                <h4>btc</h4>
                <h4>eth</h4>
                <h4>dodge</h4>
              </div>
              <button onClick={()=> navigate('/buysell', {state: wallet})}>View</button>
            </div>
          </section>

          <section className="transactions">
            <div className="card">
              <h2>Recent Transactions</h2>
              <button onClick={()=> navigate('/transactions', {state: id})}>View</button>
            </div>
          </section>

          <section className="watchlist">
            <div className="card">
              <h2>Your Watchlist</h2>
              <h4>watchlist icon</h4>
              <h4>watchlist icon</h4>
              <h4>watchlist icon</h4>
              <br></br>
              <button onClick={()=> navigate('/watchlist', {state: id})}>View</button>

            </div>
          </section>

          <footer className="footer">
            <p>Crypto Wallet</p>
          </footer>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default Dashboard;
