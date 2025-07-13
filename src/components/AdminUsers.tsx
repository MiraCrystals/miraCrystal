import React from 'react';

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-sage-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-sage-800 mb-6">👥 View Users</h2>
        <p className="text-sage-600 mb-4">See a list of users who placed orders or registered.</p>
        {/* Add user data table or user actions here */}
        <div className="border border-dashed border-sage-300 rounded-xl p-6 text-sage-500 text-center">
          User management features coming soon...
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
