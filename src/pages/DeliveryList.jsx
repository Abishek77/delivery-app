import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const signInData = localStorage.getItem("user");
  const parsedSignInData = JSON.parse(signInData);
  console.log("parsedSignInData", parsedSignInData);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://minitgo.com/api/delivery_boy_orders_accpect.php"
      );
      const result = response.data;
      setData(result.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the data", error);
      setLoading(false);
    }
  };
  const handleAction = async (item, action) => {
    const payload = {
      oid: item.oid,
      delivery_boy_id: parsedSignInData.userId,
      delivery_boy_name: parsedSignInData.fullName,
      delivery_boy_coordinates_from: "40.7128,-74.0060",
      product_status: action === "cancled" ? "cancled" : "waiting",
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
        fetchData();
        window.location.reload();
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
  const acceptedOrders = data.filter(
    (item) => item.product_status === "accepted"
  );
  const rejectedOrders = data.filter(
    (item) => item.product_status === "rejected"
  );
  const cancledOrders = data.filter(
    (item) => item.product_status === "cancled"
  );
  console.log(data);
  const renderOrders = (
    orders,
    showCancelButton = false,
    showUndoButton = false
  ) => {
    return orders.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-3 my-2">
        <div className="flex justify-between">
          <div className="flex-1 flex items-center justify-center py-2">
            <img
              src={item.product_image}
              alt={item.product_name}
              className="w-28 h-36 object-cover rounded-lg bg-black"
            />
          </div>
          <div className="flex-1">
            <div>
              <div className="flex items-center gap-1">
                <p className="text-gray-500 text-sm m-0 ">
                  {new Date(item.date).toLocaleString()}
                </p>
                {(item.product_status === "accepted" || item.product_status === "rejected") && (
                  <span
                    className={`ml-2 w-3 h-3 ${
                      item.product_status === "accepted" ? "bg-green-500" : "bg-red-500"
                    } rounded-full`}
                  ></span>
                )}
              </div>
              <h2 className="text-lg font-semibold m-0">
                Order ID: {item.oid}
              </h2>
              <div className="flex items-center justify-between m-0">
                <p className="m-0 text-sm">{item.product_name}</p>
                <p className="m-0 text-sm">Color: {item.product_color}</p>
              </div>
              <div className="flex items-center justify-between m-0">
                <p className="m-0 text-sm">Quantity: {item.quantity}</p>
                <p className="m-0 text-sm">Price: ${item.product_price}</p>
              </div>
              <p className="mt-1 text-sm">Product ID: {item.product_id}</p>
              {showCancelButton && (
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => handleAction(item, "cancled")}
                >
                  Cancel Order
                </button>
              )}
              {showUndoButton && (
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleAction(item, "waiting")}
                >
                  Undo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="mb-20">
      <div className="">
        <h2 className="mx-2 text-2xl font-bold">Accepted Orders</h2>
        <div>
          {acceptedOrders.length > 0 ? (
            renderOrders(acceptedOrders, true)
          ) : (
            <p>No accepted orders available</p>
          )}
        </div>
      </div>
      <div>
        <h2 className=" mx-2 text-2xl font-bold mt-8">Rejected Orders</h2>
        <div>
          {rejectedOrders.length > 0 ? (
            renderOrders(rejectedOrders,false, true)
          ) : (
            <p>No rejected orders available</p>
          )}
        </div>
      </div>
      <div>
        <h2 className=" mx-2 text-2xl font-bold mt-8">Cancled Orders</h2>
        <div>
          {cancledOrders.length > 0 ? (
            renderOrders(cancledOrders, false, true)
          ) : (
            <p className="mx-2">No cancled orders available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryList;
