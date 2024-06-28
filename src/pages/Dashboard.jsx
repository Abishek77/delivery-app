import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const signInData = localStorage.getItem("user");
  const parsedSignInData = JSON.parse(signInData);
  console.log("parsedSignInData", parsedSignInData);

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
  const handleAction = async (item, action) => {
    const payload = {
      oid: item.oid,
      delivery_boy_id: parsedSignInData.userId,
      delivery_boy_name: parsedSignInData.fullName,
      delivery_boy_coordinates_from: "40.7128,-74.0060",
      product_status: action === "accept" ? "accepted" : "rejected",
      // product_status:"cancled",
      delivery_boy_phonenumber: parsedSignInData.phoneNumber,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        "https://minitgo.com/api/delivery_boy_orders_update.php",
        payload
      );

      console.log("Axios Response:", response);

      if (response.data.status === true) {
        console.error("Failed to perform action:", response.data.message);
        window.location.reload()
      }
    } catch (error) {
      console.error("Error performing action:", error);
    }
  };
  // console.log(data);
  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div className="text-center p-4">No data available</div>;
  }
  console.log(data);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-3 mb-11">
        {data.map((item, index) => {
          return (
            <div className="bg-white rounded-lg shadow-md p-3 my-2">
              <div class="flex justify-between  ">
                <div class="flex-1 flex items-center justify-center py-2">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-28 h-36 object-cover  rounded-lg bg-black"
                  />
                </div>
                <div class="flex-1   ">
                  <div>
                    <p className="text-gray-500 text-sm m-0">
                      {new Date(item.date).toLocaleString()}
                    </p>
                    <h2 className="text-lg font-semibold m-0">
                      Order ID: {item.oid}
                    </h2>
                    <div className="flex items-center justify-between m-0">
                      <p className="m-0 text-sm">{item.product_name}</p>
                      <p className="m-0 text-sm">Color: {item.product_color}</p>
                    </div>
                    <div className="flex items-center justify-between m-0">
                      <p className="m-0 text-sm">Quantity: {item.quantity}</p>
                      <p className="m-0 text-sm">
                        Price: ${item.product_price}
                      </p>
                    </div>
                    <p className="mt-1 text-sm">
                      Product ID: {item.product_id}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 ">
                      <button
                        onClick={() => handleAction(item, "accept")}
                        className="bg-green-500 text-white px-3 py-1 rounded-full "
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(item, "reject")}
                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="grid grid-cols-2 gap-4 mx-3 my-3">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">20</div>
            <div className="text-gray-600">Completed Deliveries</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">100</div>
            <div className="text-gray-600">Pending Deliveries</div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">50</div>
            <div className="text-gray-600">Total Collected</div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold">26</div>
            <div className="text-gray-600">Total Earnings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
