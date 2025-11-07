import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

const ProfileEditModal = () => {
  const menuItems = [
    { id: 1, label: 'Edit profile' },
    { id: 2, label: 'Change Password' },
    { id: 3, label: 'Privacy policy' },
    { id: 4, label: 'Teams & Condition' },
    { id: 5, label: 'Settings' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className=" px-6 py-4 " style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
        <h2 className="text-white text-lg font-semibold mb-1">My profile</h2>
        <p className="text-white text-sm opacity-90">
          Discover Jewish Art Gaaleries Judaica Stores, Synagogue Gift Shops...
        </p>
      </div>

      {/* Profile Section */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dominant-baseline='central' fill='%239ca3af' font-family='sans-serif'%3EMC%3C/text%3E%3C/svg%3E"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1">
              <CheckCircle className="w-3 h-3 text-white fill-current" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h3 className="text-gray-800 font-semibold text-base mb-1">Md Camrone</h3>
            <p className="text-gray-600 text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur. Ut sit pharetra ac nibh. Tristique donec nisl at elementum.
            </p>
            <button className="bg-blue-600 !text-white px-6 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-gray-100">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between px-6 py-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors ${
              index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            <span className="text-gray-700 text-sm font-medium">{item.label}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileEditModal;