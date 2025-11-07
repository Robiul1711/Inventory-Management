import React, { useState } from 'react';
import { ArrowLeft, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrintPriceCalculator() {
  const [address, setAddress] = useState('');

  return (

      <div className="max-w-4xl w-full mx-auto">
     {/* Back Button */}
        <div className="mb-8 flex justify-center">
          <Link to="/pricing-calculator" className="flex items-center gap-2 px-4 py-2  rounded-lg shadow-sm !text-gray-600 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to products</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-3">
            Your perfect print price
          </h1>
          <p className="text-blue-600 text-sm">
            Acrylic Glasses - 38.2 * 28 in
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl sm:shadow-xl p-4 sm:p-8">
          {/* Price Display */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-blue-600 mb-2">
              $99.72
            </div>
            <p className="text-gray-600 text-sm">
              Total price for your acrylic glass
            </p>
          </div>

          {/* Shipping Address */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              Shipping address
            </label>
            <input
              type="text"
              placeholder="Start typing adress..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-2">
              Total price for your acrylic glass
            </p>
          </div>

          {/* Packing Method */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              Packing method
            </label>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Package className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Box Shipping
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Your acrylic glass will be shipped flat in a protective box
                  </p>
                  <p className="text-xs text-gray-400">
                    Packing: 42.3" * 32.2" *4 + Weight: 12gm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Acrylic glass</span>
                <span className="font-semibold text-gray-900">$97.73</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Size</span>
                <span className="text-gray-600">38.2 * 28 in</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-6 py-3 bg-gray-200 !text-gray-700 text-sm sm:text-base rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Back to quote
            </button>
            <Link to="/shipping-form" className="flex-1 px-6 py-3 text-center text-sm sm:text-base bg-blue-600 !text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Calculator shipping
            </Link>
          </div>
        </div>
      </div>
   
  );
}