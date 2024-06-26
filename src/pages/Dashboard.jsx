import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://minitgo.com/api/delivery_boy_orders.php"
        );
        const result = await response.json();
        setData(result.data || []); 
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
  console.log(data);

  return (
    <div className="mb-20">
      {data.map((item, index) => {
        return (
          <div className="max-w-md mx-auto bg-gray-50  rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 my-6 ">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Order ID: {item.order_id}
                </h2>
                <span className="text-gray-500 text-sm">
                  {new Date(item.date).toLocaleString()}
                </span>
              </div>
              <div className="flex gap-4">
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.product_name}</h3>
                  <p className="text-gray-500">Product ID: {item.product_id}</p>
                  <p className="text-gray-500">Color: {item.product_color}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">Price: ${item.product_price}</p>
                </div>
              </div>
                <div className="flex justify-end gap-4  border-gray-200">
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full ">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                      Reject
                    </button>
                  </div>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
