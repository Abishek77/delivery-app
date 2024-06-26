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
  console.log(data);

  return (
    // <div className="dashboard ">
    //     <div className="p-2">
    //       {data.map((item,index) => (
    //         <div key={index} className="bg-gray-50  p-4 rounded-lg mb-4">
    //           <div className="text-gray-600 mb-2">
    //             <p className="flex items-center">

    //             </p>
    //             <p className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M3 10h18M3 15h18m-2 10a1 1 0 001-1v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v5a1 1 0 001 1h14z"
    //                 ></path>
    //               </svg>
    //               A-58, Valam nagar Soc., Varachha, Surat
    //             </p>
    //           </div>
    //           <div className="flex justify-between mb-2 ">
    //             <div className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M12 8v4l3 3"
    //                 ></path>
    //               </svg>
    //               8:00 AM
    //             </div>
    //             <div className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M12 8v4l3 3"
    //                 ></path>
    //               </svg>
    //               4:00 PM
    //             </div>
    //           </div>
    //           <div className="flex justify-between items-center">
    //             <span>Approx: 5 km</span>
    //             <div className="flex gap-2">
    //               <button className="bg-green-500 text-white px-3 py-1 rounded-full ">Accept</button>
    //               <button className="bg-red-500 text-white px-3 py-1 rounded-full">Reject</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
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
              {/* <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold">Client Details</h4>
                <p>Name: {item.client_name}</p>
                <p>Coordinates: {item.client_coordinates}</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold">User Details</h4>
                <p>User ID: {item.user_id}</p>
                <p>Coordinates: {item.user_coordinates}</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold">Order Details</h4>
                <p>Payment Mode: {item.payment_mode}</p>
                <p>Order Status: {item.product_status}</p>
                <p>Time: {item.time}</p>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
