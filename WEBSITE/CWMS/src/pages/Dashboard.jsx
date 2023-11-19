import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

// assuming its props
const Dashboard = () => {
  // const user = props.userid;
  const user = '8c250833-cc8c-4b6a-8184-31b8d88b50d8';
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      try{
        //fetch data of user having uuid as user
        const {data: userData, error: userError} = await supabase
        .from('user')
        .select('*')
        .eq('userid', user)
        .single();
        console.log(userData)
        if (userError) {throw userError;}
        
        setUserData(userData);

      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  

  return (
    <div>
      <section className="hero">
        <div className='card'>
          <h2>Welcome MR {userData.firstname}</h2>
          <p>Cryptocurrency Wallet Is Active.</p>
          <br></br>
          <a href="#" className="cta-button">WALLET ID</a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 
