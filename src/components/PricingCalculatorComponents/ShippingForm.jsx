import React, { useState } from 'react';
import { ArrowLeft, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShippingForm() {
  const [selectedShipping, setSelectedShipping] = useState('ground');
  const [address, setAddress] = useState('');

  const shippingOptions = [
    { id: 'ground', name: 'UPS Ground', delivery: '5 business days', price: 99.72 },
    { id: '2nd-day', name: 'UPS 2nd day air', delivery: '5 business days', price: 99.72 },
    { id: 'next-day', name: 'UPS Next day air', delivery: '5 business days', price: 99.72 }
  ];

  const productPrice = 97.73;
  const shippingPrice = 78.73;
  const total = 175.75;

  return (
      <div className="max-w-4xl w-full mx-auto">
        {/* Back button */}
     {/* Back Button */}
        <div className="mb-8 flex justify-center">
          <Link to="/pricing-calculator" className="flex items-center gap-2 px-4 py-2  rounded-lg shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to products</span>
          </Link>
        </div>

        {/* Main container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center mb-2">Where should we ship it?</h1>
          <p className="text-center text-blue-600 text-sm mb-8">Acrylic Glosses - 38.2 * 28 in</p>

          {/* Price display */}
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-blue-600 mb-1">${productPrice + shippingPrice}</div>
            <div className="text-gray-500 text-sm">Total price for your acrylic glass</div>
          </div>

          {/* Shipping address */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Shipping address</label>
            <input
              type="text"
              placeholder="Start typing address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-xs text-gray-400 mt-2">Total price for your acrylic glass</div>
          </div>

          {/* Packing method */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Packing method</label>
            <div className="border rounded-lg p-4 flex items-start gap-3">
              <Package className="text-blue-600 mt-1" size={24} />
              <div>
                <div className="font-semibold text-sm mb-1">Box Shipping</div>
                <div className="text-xs text-gray-500 mb-1">
                  Your acrylic glass will be shipped flat in a protective box
                </div>
                <div className="text-xs text-gray-400">
                  Packing: 42.3" × 32.2" × 4" × Weight: 12gm
                </div>
              </div>
            </div>
          </div>

          {/* Shipping options */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Select shipping option</label>
            <div className="space-y-3">
              {shippingOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedShipping(option.id)}
                  className="border rounded-lg p-4 flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedShipping === option.id ? 'border-blue-600' : 'border-gray-300'
                    }`}>
                      {selectedShipping === option.id && (
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{option.name}</div>
                      <div className="text-xs text-gray-500">Estimated delivery: {option.delivery}</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold">${option.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="border-t pt-6 mb-6">
            <h3 className="font-semibold mb-4">Order summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium text-sm">Acrylic glass</div>
                  <div className="text-xs text-gray-500">Size</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm">${productPrice.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">38.2 * 28 in</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm">Shipping(UPS Ground)</div>
                <div className="font-medium text-sm">${shippingPrice.toFixed(2)}</div>
              </div>
              <div className="flex justify-between pt-3 border-t">
                <div className="font-semibold">Total</div>
                <div className="font-bold text-blue-600">${total.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Link to="/print-price-calculator" className="flex-1 px-6 py-3 text-center bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Back
            </Link>
            <button className="flex-1 px-6 py-3 bg-blue-600 !text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Calculate order
            </button>
          </div>
        </div>
      </div>

  );
}