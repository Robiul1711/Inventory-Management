import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SizeCalculator() {
  const [unit, setUnit] = useState('inches');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleCalculate = () => {
    // if (width && height) {
    //   alert(`Calculating price for ${width} x ${height} ${unit}`);
    // } else {
    //   alert('Please enter both width and height');
    // }
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <div className="flex justify-center mb-8">
          <Link to="/pricing-calculator" className="flex items-center gap-2 px-6 py-3  rounded-full shadow-sm hover:shadow-md transition-shadow !text-gray-700">
            <ArrowLeft size={20} />
            <span>Back to products</span>
          </Link>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl text-black font-bold text-center mb-4">
          What size do you need?
        </h1>

        {/* Selected Product */}
        <p className="text-center text-gray-600 mb-12">
          Sellected: <span className="text-blue-600">Acrylic Glasss</span>
        </p>

        {/* Calculator Card */}
        <div className=" rounded-3xl shadow-lg p-8 md:p-12">
          {/* Unit Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setUnit('inches')}
                className={`px-12 py-3 rounded-full font-medium transition-all ${
                  unit === 'inches'
                    ? 'bg-blue-600 !text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('centimeters')}
                className={`px-12 py-3 rounded-full font-medium transition-all ${
                  unit === 'centimeters'
                    ? 'bg-blue-600 !text-white shadow-md'
                    : '!text-gray-600 !hover:text-gray-900'
                }`}
              >
                Contimeters
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Width Input */}
            <div>
              <label className="block text-lg font-medium mb-3 text-gray-900">
                Width(in)
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 !text-black rounded-2xl border-0 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all !placeholder-gray-400"
                />
      
              </div>
            </div>

            {/* Height Input */}
            <div>
              <label className="block text-lg font-medium mb-3 text-gray-900">
                Height
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 !text-black  rounded-2xl border-0 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder-gray-400"
                />
       
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center">
            <Link to='/print-price'
              onClick={handleCalculate}
              className="px-16 py-4 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-xl"
            >
              Calculate Price
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}