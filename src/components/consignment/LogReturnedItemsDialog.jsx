import { ChevronDown, ChevronUp, ChevronUpSquare, Group, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import invoice from '@/assets/images/invoice.png'
import { IoPeople } from 'react-icons/io5';

const LogReturnedItemsDialog = ({ onClose }) => {
    const [returnedQty, setReturnedQty] = useState(63);
    return (
        <div>
            <div>
                <div className="bg-white rounded-lg w-full">
                    {/* Header */}
                    <div
                        style={{
                            background:
                                "linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)",
                        }}
                        className="bg-gradient-to-r text-white p-4 rounded-t-lg flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-[rgba(255,255,255,0.42)] bg-opacity-20 p-2 rounded-lg">
                                <IoPeople className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">Log Returned Items</h2>
                                <p className="text-sm text-teal-50">
                                    Configure Permission For Yossi Bitton
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Content */}
                    <div className="p-6">
                        {/* Total Items Delivered */}
                        <div className="mb-6">
                            <p className="text-sm text-blue-600 mb-1">Total Items Delivered</p>
                            <p className="text-2xl font-bold text-gray-800">50</p>
                        </div>

                        {/* Enter Returned Quantity */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-800 mb-4">Enter Returned Quantity for Each Item</h3>

                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 mb-1">12 TRIBES - 2 SUKKAH POSTER</h4>
                                        <p className="text-xs text-gray-500">SKU: very stores 34-98 | Size: 24k34</p>
                                        <p className="text-xs text-gray-500">Delivery: 50 | Unit price: $15.00</p>
                                    </div>
                                    <div className="flex items-center gap-3 ml-4">
                                        <span className="text-sm text-gray-600">Returned</span>
                                        <div className="flex items-center">
                                            <input
                                                type="number"
                                                value={returnedQty}
                                                onChange={(e) => setReturnedQty(parseInt(e.target.value) || 0)}
                                                className="w-16 text-center border border-gray-300 rounded py-1 text-sm"
                                            />
                                            <div className="flex flex-col ml-1">
                                                <button
                                                    onClick={() => setReturnedQty(prev => prev + 1)}
                                                    className="hover:bg-gray-100 p-0.5 rounded"
                                                >
                                                    <ChevronUp className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <button
                                                    onClick={() => setReturnedQty(prev => Math.max(0, prev - 1))}
                                                    className="hover:bg-gray-100 p-0.5 rounded"
                                                >
                                                    <ChevronDown className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Total Sold Items</span>
                                <span className="text-gray-800">50</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Total Sold Items</span>
                                <span className="text-gray-800">50</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                                <span className="text-gray-800">Total Items Delivery</span>
                                <span className="text-gray-800">50</span>
                            </div>
                        </div>

                        {/* Success Rate */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <p className="text-xs text-gray-600 mb-1">Success rates</p>
                            <p className="text-lg font-bold text-green-600">100% Of Items Sold</p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-6 py-2 !text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
                                Save Change
                            </button>
                        </div>
                    </div>








                </div>
            </div>
        </div>
    );
};

export default LogReturnedItemsDialog;






