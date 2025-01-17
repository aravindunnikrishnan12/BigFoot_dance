import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Thiruvananthapuram",
    city: "Thiruvananthapuram",
    state: "Kerala",
    pincode: "695001",
    photo: null,
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have a new message from Admin", isRead: false },
    { id: 2, message: "Your order #12345 has been shipped", isRead: false },
  ]);

  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Bigfoot Tshirt", price: "₹400" },
    { id: 2, name: "Tshirt2", price: "₹500" },
  ]);

  const [orders, setOrders] = useState([
    { id: 1, orderId: "#12345", date: "2024-01-15", amount: "₹1200", status: "Shipped" },
    { id: 2, orderId: "#67890", date: "2024-01-10", amount: "₹800", status: "Delivered" },
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserData(formData);
    setEditing(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData({ ...userData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f2a229]">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">My Profile</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-10">
          {/* Profile Section */}
          <div className="flex items-center space-x-8">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200">
              {userData.photo ? (
                <img
                  src={userData.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-400 text-white text-2xl font-bold">
                  JD
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{userData.fullName}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <label
                htmlFor="photoUpload"
                className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-600"
              >
                Change Photo
              </label>
              <input
                type="file"
                id="photoUpload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            {editing ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["fullName", "email", "phone", "address", "city", "state", "pincode"].map(
                  (field) => (
                    <div key={field}>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                        htmlFor={field}
                      >
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md"
                      />
                    </div>
                  )
                )}
                <button
                  onClick={handleSave}
                  className="col-span-1 sm:col-span-2 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-gray-700">
                <p><strong>Name:</strong> {userData.fullName}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p>
                  <strong>Address:</strong> {userData.address}, {userData.city},{" "}
                  {userData.state} - {userData.pincode}
                </p>
                <button
                  onClick={() => setEditing(true)}
                  className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-4 rounded-md shadow-md ${
                    notification.isRead ? "bg-gray-100" : "bg-yellow-100"
                  }`}
                >
                  <div className="flex justify-between">
                    <span>{notification.message}</span>
                    {!notification.isRead && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Wishlist */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wishlist</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {wishlist.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-gray-100 rounded-md shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Orders */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
            <ul className="space-y-4">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="p-4 bg-white rounded-md shadow hover:shadow-lg"
                >
                  <div className="flex justify-between">
                    <div>
                      <p><strong>Order ID:</strong> {order.orderId}</p>
                      <p><strong>Date:</strong> {order.date}</p>
                      <p><strong>Amount:</strong> {order.amount}</p>
                    </div>
                    <p
                      className={`text-sm font-medium ${
                        order.status === "Delivered" ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
