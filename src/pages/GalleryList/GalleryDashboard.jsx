import React from "react";
import { FaCity, FaStore, FaPalette } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const galleries = [
  {
    id: 1,
    date: "Aug 28, 2025",
    owner: "No",
    city: "New1234",
    state: "United",
    address: "2412 Brodway, New Work",
    phone: "01972686889",
    email: "ashikuzzamant@example.com",
    joinDate: "26 Aug, 2025",
    note: "No",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    owner: "No",
    city: "New1234",
    state: "United",
    address: "2412 Brodway, New Work",
    phone: "01972686889",
    email: "ashikuzzamant@example.com",
    joinDate: "26 Aug, 2025",
    note: "No",
  },
  {
    id: 3,
    date: "Aug 28, 2025",
    owner: "No",
    city: "New1234",
    state: "United",
    address: "2412 Brodway, New Work",
    phone: "01972686889",
    email: "ashikuzzamant@example.com",
    joinDate: "26 Aug, 2025",
    note: "No",
  },
];

const InfoCard = ({ title, count, color, icon }) => (
  <div className={`flex-1 flex items-center justify-between p-4 rounded-xl ${color} text-[#0D172A]`}>
    <div>
      <h3 className="text-sm font-medium">{title}</h3>
      <h2 className="text-xl font-bold">{count}</h2>
    </div>
    <div className="text-3xl opacity-60">{icon}</div>
  </div>
);

const GalleryDashboard = () => {
  return (
    <div className="w-full bg-[#F9FAFB] p-6 space-y-6 rounded-2xl">
      {/* Header cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <InfoCard
          title="Best performing Gallery"
          count={0}
          color="bg-[#EAF1FF]"
          icon={<FaStore className="text-blue-600" />}
        />
        <InfoCard
          title="Best performing Art"
          count={0}
          color="bg-[#FFF6DB]"
          icon={<FaPalette className="text-yellow-600" />}
        />
        <InfoCard
          title="Best performing City"
          count={0}
          color="bg-[#EAF1FF]"
          icon={<FaCity className="text-blue-500" />}
        />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City:
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none">
              <option>All city...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State:
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none">
              <option>All state</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              2 products selected
            </span>
            <span className="text-blue-600 font-medium">48 More Available</span>
          </div>
          <button className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 hover:bg-blue-50">
            Clear selection
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-[#F3F6FA] text-left">
              <th className="p-3 w-[40px]">
                <input type="checkbox" />
              </th>
              <th className="p-3">Gallery Name</th>
              <th className="p-3">Owner Name</th>
              <th className="p-3">City</th>
              <th className="p-3">State</th>
              <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Join Date</th>
              <th className="p-3">Places Sold</th>
              <th className="p-3">Note</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {galleries.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 whitespace-nowrap">{item.date}</td>
                <td className="p-3">{item.owner}</td>
                <td className="p-3">{item.city}</td>
                <td className="p-3">{item.state}</td>
                <td className="p-3">{item.address}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3 truncate max-w-[150px]">{item.email}</td>
                <td className="p-3">{item.joinDate}</td>
                <td className="p-3 flex gap-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-md">
                    Hold
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-md">
                    Sold
                  </span>
                </td>
                <td className="p-3">{item.note}</td>
                <td className="p-3 flex gap-3 justify-center text-gray-600">
                  <button className="hover:text-blue-600">
                    <FiEdit2 />
                  </button>
                  <button className="hover:text-red-500">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-3 text-sm text-gray-500 border-t">
          <span>1–50 of 2313</span>
          <div className="flex gap-2">
            <button className="border px-2 py-1 rounded hover:bg-gray-100">
              ‹
            </button>
            <button className="border px-2 py-1 rounded hover:bg-gray-100">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDashboard;
