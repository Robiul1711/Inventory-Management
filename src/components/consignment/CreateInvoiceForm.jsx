import React, { useState } from 'react';
import { FileText, Plus, Mail } from 'lucide-react';
import invoice from "@/assets/images/invoice.png"

const CreateInvoiceForm = ({ onClose }) => {
    const [email, setEmail] = useState('info123@gamil.com');
    const [emails, setEmails] = useState(['info123@gamil.com']);

    const addEmail = () => {
        if (email.trim() && !emails.includes(email.trim())) {
            setEmails([...emails, email.trim()]);
            setEmail('');
        }
    };

    return (
        <div className="bg-white w-full">
            {/* Header */}
            <div className=" px-6 py-4 " style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
                <div className="flex items-center gap-3">
                    <div className="bg-gray-400 bg-opacity-20 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_617_17607)">
    <path d="M30.9083 10.7509L23.6646 3.5072C23.0669 2.90951 22.4607 2.60645 21.8628 2.60645C21.0419 2.60645 20.0833 3.23082 20.0833 4.99051V7.45663C14.8206 7.68601 9.90588 9.84432 6.15737 13.5926C2.18712 17.5626 0.000437546 22.8411 4.54999e-08 28.4556C-6.1231e-05 28.6524 0.0617716 28.8441 0.176742 29.0038C0.291712 29.1634 0.453991 29.2828 0.640598 29.3451C0.827206 29.4074 1.02868 29.4094 1.21649 29.3509C1.40431 29.2923 1.56893 29.1761 1.68706 29.0188C6.11312 23.1273 12.7769 19.6455 20.0833 19.3706V21.7986C20.0833 23.5583 21.0419 24.1827 21.8627 24.1828H21.8628C22.4607 24.1828 23.067 23.8797 23.6646 23.282L30.9083 16.0383C31.6123 15.3344 32 14.3955 32 13.3946C32 12.3937 31.6123 11.4548 30.9083 10.7509ZM29.5825 14.7124L22.3388 21.9563C22.1999 22.0952 22.0848 22.1829 21.9999 22.2363C21.9776 22.1386 21.9583 21.9951 21.9583 21.7987V18.4155C21.9583 17.8978 21.5386 17.478 21.0208 17.478C16.8554 17.478 12.8751 18.4324 9.19063 20.3145C6.54563 21.6657 4.12775 23.4846 2.08019 25.6507C3.44231 16.4196 11.4174 9.31126 21.0208 9.31126C21.5386 9.31126 21.9583 8.89151 21.9583 8.37376V4.99051C21.9583 4.79407 21.9776 4.65063 21.9999 4.55301C22.0847 4.60632 22.1999 4.69407 22.3388 4.83301L29.5825 12.0768C29.9324 12.4266 30.125 12.8946 30.125 13.3946C30.125 13.8946 29.9324 14.3626 29.5825 14.7124Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_617_17607">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    </div>
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-0.5">Share invoices</h2>
                        <p className="text-white text-sm opacity-90">
                            3 Invoices Selected -Customer Aide One Passaic
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-0">
                {/* Left Side - Invoice Preview */}
                <div className="w-1/2 bg-gray-50 p-6 border-r border-gray-200">
                   <img src={invoice} alt="Invoice" className="w-full h-auto"/>
                </div>

                {/* Right Side - Email and Preview */}
                <div className="w-1/2 p-6">
                    {/* All Users Section */}
                    <div className="mb-6 flex flex-col gap-3">
                        <h3 className="text-gray-800 font-semibold mb-3">All users</h3>
                        <div className="space-y-2">
                            {emails.map((emailItem, index) => (
                                <div key={index} className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-700">
                                    {emailItem}
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={addEmail}
                            className="w-full mt-4 bg-green-600 !text-white py-2.5 rounded font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            Add email
                        </button>
                    </div>

                    {/* Email Message Preview */}
                    <div className="mb-6">
                        <h3 className="text-gray-800 font-semibold mb-3">Email massage preview</h3>
                        <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700 leading-relaxed max-h-96 overflow-y-auto">
                            <p className="mb-3">
                                Ben Ari Group Corp ("Consignor") and KC Arts & Custom Picture Framing ("Consignee") agree to the consignment terms as follow.
                            </p>
                            <p className="mb-3">
                                <span className="font-semibold">ARTWORK:</span> 12 Tribes - 1 Sukkah Poster<br />
                                <span className="font-semibold">Artist:</span> Ben Ari Group Corp | <span className="font-semibold">Medium:</span> Paper Poster<br />
                                <span className="font-semibold">Size:</span> 20x24
                            </p>
                            <p className="mb-3 font-semibold">TERMS:</p>
                            <p className="mb-2">1. PERIOD: Agreement effective until terminated with 30 days notice.</p>
                            <p className="mb-3">2. COMMISSION: Consignee receives 40% commission, Consignor receives 60%.</p>
                            <p className="mb-3">Both parties agree to these terms by signing below.</p>
                            <p className="mb-2">CONSIGNORCONSIGNEEBen Ari Group CorpKC Arts & Custom Picture Framing</p>
                            <div className="flex justify-between mb-2">
                                <span>Signature / Date</span>
                                <span>Signature / Date</span>
                            </div>
                            <p className="text-xs text-gray-600">
                                Gallery: 252 Court St, Brooklyn, NY 11231, UNITED undefined<br />
                                Contact: undefined | undefined
                            </p>
                        </div>
                    </div>

                    {/* Send Button */}
                    <button className="w-full bg-blue-600 !text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        Send Via Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateInvoiceForm;