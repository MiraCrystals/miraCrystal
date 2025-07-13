// AdminOrders.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Order {
  _id: string;
  name: string;
  phone: string;
  address: string;
  cartItems: { name: string; price: number; quantity: number }[];
  total: number;
  status: string;
  createdAt: string;
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "${process.env.BASE_URL}/api/order/admin/orders"
      );
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId: string, newStatus: string) => {
    try {
      await axios.put(
        `${process.env.BASE_URL}/api/order/admin/orders/${orderId}/status`,
        {
          status: newStatus,
        }
      );
      fetchOrders(); // Refresh
    } catch (err) {
      console.error("Status update failed:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          📋 Manage Orders
        </h2>
        <p className="text-gray-600 mb-4">
          Track, update, and manage all customer orders.
        </p>

        {loading ? (
          <div className="text-center text-gray-500">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center text-gray-400">No orders found.</div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full border border-gray-200 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Total (₹)</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-t">
                    <td className="px-4 py-2 font-medium">{order.name}</td>
                    <td className="px-4 py-2">{order.phone}</td>
                    <td className="px-4 py-2">{order.address}</td>
                    <td className="px-4 py-2">
                      {order.cartItems.map((item, index) => (
                        <div key={index}>
                          {item.name} × {item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-2 font-semibold">
                      ₹{order.total.toFixed(2)}
                    </td>
                    <td className="px-4 py-2">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order._id, e.target.value)
                        }
                        className="border rounded px-2 py-1">
                        <option value="Placed">Placed</option>
                        <option value="On the Way">On the Way</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
