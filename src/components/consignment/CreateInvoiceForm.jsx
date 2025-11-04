import { Group, ShoppingCart } from 'lucide-react';
import React from 'react';
import invoice from '@/assets/images/invoice.png'
import { IoPeople } from 'react-icons/io5';


const CreateInvoiceForm = ({ onClose }) => {
    return (
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
                            <h2 className="text-2xl font-semibold">Consignment invoice preview</h2>
                            <p className="text-sm text-teal-50">
                                Configure permission for yossi bitton
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <div className="">
                        <img src={invoice} alt="" className='w-full' />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button className=' bg-green-500 px-5 py-2 rounded-lg !text-white !text-xl'>Create</button>
                        <button className=' bg-blue-600 px-5 py-2 rounded-lg !text-white !text-xl'>Send Via Email</button>
                        <button className=' bg-gray-300 px-5 py-2 rounded-lg  !text-xl'>Cancel</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CreateInvoiceForm;