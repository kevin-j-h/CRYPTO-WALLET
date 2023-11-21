import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";

const Dashboard = () => {
  const location = useLocation();
  console.log(location)
  const id = location.state.user.id
  console.log(id)
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const { data: userData, error: userError } = await supabase
            .from("user")
            .select("*")
            .eq("userid", id)
            .single();

          if (userError) {
            throw userError;
          }

          setUserData(userData);
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
        <section className="hero">
          <div className="card">
            <h2>Welcome MR {userData?.firstname}</h2>
            <p>Cryptocurrency Wallet Is Active.</p>
            <br></br>
            <a href="#" className="cta-button">
              WALLET ID
            </a>
          </div>
        </section>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default Dashboard;
