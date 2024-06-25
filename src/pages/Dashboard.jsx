import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://minitgo.com/api/delivery_boy_orders.php"
        );
        const result = await response.json();
        // console.log(result); // Log the API response to inspect its structure
        setData(result.data || []); // Assuming the data you need is in `result.orders`
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log(data);
  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div className="text-center p-4">No data available</div>;
  }
  const profile=()=>{
    navigate("/profile")
  }

  return (
    <div className="dashboard ">
      <div className="header px-3 bg-black">
        <button></button>
        <div className="profile" onClick={profile}></div>
      </div>
      <div className="mt-4">
        {data.map((item, index) => {
          return (
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-black">
                  {item.client_name}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.client_coordinates}
                </h3>
                <h3 className="text-lg font-bold text-black">{item.date}</h3>
                <h3 className="text-lg font-bold text-black">{item.oid}</h3>
                <h3 className="text-lg font-bold text-black">
                  {item.order_id}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.payment_mode}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_color}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_id}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_image}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_name}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_price}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.product_status}
                </h3>
                <h3 className="text-lg font-bold text-black">
                  {item.quantity}
                </h3>
                <h3 className="text-lg font-bold text-black">{item.time}</h3>
                <h3 className="text-lg font-bold text-black">
                  {item.user_coordinates}
                </h3>
                <h3 className="text-lg font-bold text-black">{item.user_id}</h3>

                <p>{}</p>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                  Accept
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
