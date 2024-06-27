import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DeliveryList = () => {
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
            <div className="bg-white rounded-lg shadow-md p-2 my-2">
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
                      Order ID: {item.order_id}
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
                  </div>
                  <div >
                   <div className="flex items-center justify-between gap-2 ">
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
            </div>
          );
        })}
      </div>
    );
}

export default DeliveryList