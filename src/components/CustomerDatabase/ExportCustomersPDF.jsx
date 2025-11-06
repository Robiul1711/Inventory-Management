import React, { useState } from 'react';
import { X, FileText, Pencil, Trash2 } from 'lucide-react';

export default function ExportCustomersPDF({ isOpen, onClose }) {
  const [customers] = useState([
    {
      id: 1,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 2,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 3,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 4,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 5,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 6,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 7,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    },
    {
      id: 8,
      storeName: 'Aisle One Passaic',
      owner: 'Michael',
      location: 'Passaic New Jersey',
      phone: '02182819393122',
      email: 'avigdorb@Gmail.Com',
      note: '-'
    }
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows(prev => 
      prev.length === customers.length ? [] : customers.map(c => c.id)
    );
  };

  return (
   
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-teal-500 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <FileText className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Export Customers to PDF</h2>
              <p className="text-blue-100 text-sm">Export 101 Customers To PDF Format/</p>
            </div>
          </div>
    
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-12">
          <div className="flex flex-col items-center">
            <div className="border-4 border-dashed border-blue-400 rounded-xl px-8 py-4 bg-white">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">101</div>
                <div className="text-blue-600 font-medium">Customer Information</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-medium">
                176 Fill
              </span>
              <span className="bg-teal-500 text-white px-4 py-1 rounded text-sm font-medium">
                21 Hug
              </span>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Export preview</h3>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedRows.length === customers.length}
                        onChange={toggleAll}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Store Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Owner</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Note</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {customers.map((customer, index) => (
                    <tr 
                      key={customer.id}
                      className={`hover:bg-gray-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(customer.id)}
                          onChange={() => toggleRow(customer.id)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.storeName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.owner}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.location}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.phone}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{customer.note}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="text-gray-600 hover:text-blue-600 transition p-1">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-red-600 transition p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 !text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Confirm Export PDF
          </button>
        </div>
      </div>
    
  );
}