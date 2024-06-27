import axios from 'axios';
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
            "https://minitgo.com/api/delivery_boy_orders_update.php"
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
    if (loading) {
      return <div className="text-center p-4">Loading...</div>;
    }
  
    if (!Array.isArray(data)) {
      return <div className="text-center p-4">No data available</div>;
    }
    console.log(data);
  
    return (
      <div className="mb-20">
        Delivery product
      </div>
    );
}

export default DeliveryList