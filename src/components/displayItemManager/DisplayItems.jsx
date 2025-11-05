import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Edit2, Trash2, X } from 'lucide-react';

const DisplayItems = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [markSoldModal, setMarkSoldModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const displayData = [
    {
      id: 1,
      customer: {
        name: 'Jonathan Zemmal',
        phone: '(785) 569-7852',
      },
      gallery: {
        name: 'The Yellow Door - Flatbush',
        address: '5359 Avenue N',
      },
      items: {
        count: 5,
        totalUnits: '9 total units',
        date: 'Aug 17,2025',
      },
      status: 'Active',
      products: [
        {
          id: 1,
          image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23d4e8d4" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="10"%3EArt%3C/text%3E%3C/svg%3E',
          name: '7 Species - parrots',
          sku: '20*34',
          artType: '$315.00',
          quantity: 1,
          dateAdded: 'Aug 17, 2025',
          displayStatus: 'On Display',
        },
        {
          id: 2,
          image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23d4e8d4" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="10"%3EArt%3C/text%3E%3C/svg%3E',
          name: '7 Species - parrots',
          sku: '20*34',
          artType: '$315.00',
          quantity: 1,
          dateAdded: 'Aug 17, 2025',
          displayStatus: 'On Display',
        },
        {
          id: 3,
          image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23d4e8d4" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="10"%3EArt%3C/text%3E%3C/svg%3E',
          name: '7 Species - parrots',
          sku: '20*34',
          artType: '$315.00',
          quantity: 1,
          dateAdded: 'Aug 17, 2025',
          displayStatus: 'On Display',
        },
      ],
    },
    {
      id: 2,
      customer: {
        name: 'Jonathan Zemmal',
        phone: '(785) 569-7852',
      },
      gallery: {
        name: 'The Yellow Door - Flatbush',
        address: '5359 Avenue N',
      },
      items: {
        count: 5,
        totalUnits: '9 total units',
        date: 'Aug 17,2025',
      },
      status: 'Active',
      products: [
        {
          id: 4,
          image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23d4e8d4" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-size="10"%3EArt%3C/text%3E%3C/svg%3E',
          name: '7 Species - parrots',
          sku: '20*34',
          artType: '$315.00',
          quantity: 1,
          dateAdded: 'Aug 17, 2025',
          displayStatus: 'On Display',
        },
      ],
    },
    {
      id: 3,
      customer: {
        name: 'Jonathan Zemmal',
        phone: '(785) 569-7852',
      },
      gallery: {
        name: 'The Yellow Door - Flatbush',
        address: '5359 Avenue N',
      },
      items: {
        count: 5,
        totalUnits: '9 total units',
        date: 'Aug 17,2025',
      },
      status: 'Active',
      products: [],
    },
    {
      id: 4,
      customer: {
        name: 'Jonathan Zemmal',
        phone: '(785) 569-7852',
      },
      gallery: {
        name: 'The Yellow Door - Flatbush',
        address: '5359 Avenue N',
      },
      items: {
        count: 5,
        totalUnits: '9 total units',
        date: 'Aug 17,2025',
      },
      status: 'Active',
      products: [],
    },
    {
      id: 5,
      customer: {
        name: 'Jonathan Zemmal',
        phone: '(785) 569-7852',
      },
      gallery: {
        name: 'The Yellow Door - Flatbush',
        address: '5359 Avenue N',
      },
      items: {
        count: 5,
        totalUnits: '9 total units',
        date: 'Aug 17,2025',
      },
      status: 'Active',
      products: [],
    },
  ];

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleMarkAsSold = (product, displayItem) => {
    setSelectedProduct({
      ...product,
      customer: displayItem.customer,
      gallery: displayItem.gallery,
    });
    setQuantity(1);
    setMarkSoldModal(true);
  };

  const handleConfirmSale = () => {
    // Handle the sale confirmation logic here
    console.log('Product marked as sold:', selectedProduct);
    console.log('Quantity:', quantity);
    setMarkSoldModal(false);
    setSelectedProduct(null);
  };

  const calculateTotalAmount = () => {
    if (!selectedProduct) return '$0.00';
    const price = parseFloat(selectedProduct.artType.replace('$', ''));
    const total = price * quantity;
    return `$${total.toFixed(2)}`;
  };

  const calculateSubtotal = () => {
    if (!selectedProduct) return '$0.00';
    const price = parseFloat(selectedProduct.artType.replace('$', ''));
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className=" bg-gray-50 p-6">
      <div className="">
        {/* Smart Filter Header */}
        <div className="bg-white rounded-lg mb-6 border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Smart Filter
                </h2>
                <p className="text-xs text-gray-500">
                  Advance filtering options
                </p>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Display Items List */}
        <div className="bg-white rounded-lg border border-gray-200">
          {displayData.map((item, index) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              {/* Main Row */}
              <div
                className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleRow(item.id)}
              >
                {/* Checkbox and Expand Icon */}
                <div className="flex items-center gap-3 w-12">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {expandedRow === item.id ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {item.customer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.customer.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.customer.phone}</p>
                  </div>
                </div>

                {/* Gallery Info */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.gallery.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.gallery.address}</p>
                  </div>
                </div>

                {/* Items Info */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {item.items.count}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.items.count} Item
                    </h3>
                    <p className="text-xs text-gray-500">{item.items.totalUnits}</p>
                    <p className="text-xs text-gray-500">{item.items.date}</p>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.status}
                  </span>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Edit2 className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Trash2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Expanded Product Details */}
              {expandedRow === item.id && (
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    Product details
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            <input type="checkbox" className="w-4 h-4 rounded" />
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            Image
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            Product
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            SKU
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            ART Type
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            Quantity
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            DATE ADDED
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            Quantity
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.products.map((product) => (
                          <tr
                            key={product.id}
                            className="border-b border-gray-100 bg-white hover:bg-gray-50"
                          >
                            <td className="py-3 px-4">
                              <input type="checkbox" className="w-4 h-4 rounded" />
                            </td>
                            <td className="py-3 px-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded object-cover"
                              />
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-900">
                              {product.name}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-900">
                              {product.sku}
                            </td>
                            <td className="py-3 px-4 text-sm text-blue-600 font-medium">
                              {product.artType}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-900">
                              {product.quantity}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-900">
                              {product.dateAdded}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {product.displayStatus}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <button
                                  className="!text-blue-600 hover:text-blue-800 text-sm font-medium"
                                  onClick={() => handleMarkAsSold(product, item)}
                                >
                                  Marked as sold
                                </button>
                                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                  <Trash2 className="w-4 h-4 text-gray-600" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mark Display Items as Sold Modal */}
      {markSoldModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            {/* Header */}
            <div className=" text-white p-4 flex items-center justify-between rounded-t-lg" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-base">
                    Mark Display Items as Sold
                  </h3>
                  <p className="text-xs opacity-90">
                    Complete The Sold Information For "{selectedProduct.name} |{' '}
                    {selectedProduct.gallery.name}"
                  </p>
                </div>
              </div>
              <button
                className="text-white  rounded-full p-1"
                onClick={() => setMarkSoldModal(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Customer Information */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Customer Information
                </h4>
                <p className="text-sm text-gray-900 font-medium">
                  {selectedProduct.customer.name}
                </p>
                <p className="text-xs text-gray-600">
                  {selectedProduct.gallery.name}
                </p>
              </div>

              {/* Items to Mark As Sold */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Items To Mark As sold
                </h4>
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedProduct.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        Sku: {selectedProduct.sku}-xxy-&A-91-05
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {calculateSubtotal()}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs !text-gray-600">Quantity To Sell:</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        className="px-2 py-1 hover:bg-gray-100 !text-black "
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 !text-black text-sm border-x border-gray-300">
                        {quantity}
                      </span>
                      <button
                        className="px-2 py-1 hover:bg-gray-100 !text-black "
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-xs text-gray-600">
                      Of {selectedProduct.quantity} Available
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Subtotal:</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {calculateSubtotal()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Amount */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Total Amount:
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    {calculateTotalAmount()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                
                <button
                  className="flex-1 px-4 py-2.5 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 font-medium"
                  onClick={handleConfirmSale}
                >
                  Confirm Sale & Create Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayItems;