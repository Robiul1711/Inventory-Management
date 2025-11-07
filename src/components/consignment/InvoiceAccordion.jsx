import React, { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";
import { FaPlay } from "react-icons/fa";
import CreateInvoiceForm from "./CreateInvoiceForm";
import LogReturnedItemsDialog from "./LogReturnedItemsDialog";

export default function InvoiceAccordion() {
    const invoiceItems = [
        {
            id: 1,
            name: "12 Tribes - sukkoh poster",
            code: "SUV",
            quantity: 50,
            price: 12.0,
            total: 175.0,
        },
        {
            id: 2,
            name: "12 Tribes - sukkoh poster",
            code: "SUV",
            quantity: 50,
            price: 12.0,
            total: 175.0,
        },
    ];

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    return (
        <div className="w-full bg-white rounded-lg shadow-sm">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="items-sent" className="border rounded-lg mb-2">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <FaPlay className="text-xl text-blue-600" />
                                <span className="text-sm text-gray-600">Aug 28, 2025</span>
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                className="text-xs !text-[#D19E1C] bg-[#FFFCED]"
                            >
                                Send First Invoice
                            </Button>

                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModal1Open(true);
                                }}
                                variant="outline"
                                size="sm"
                                className="text-xs !text-[#1C54D1] !bg-[#BED6FF]"
                            >
                                Create First Invoice
                            </Button>

                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setModal2Open(true);
                                }}
                                variant="default"
                                size="sm"
                                className="text-xs !text-[#00A649] !bg-[#00991D]/20"
                            >
                                Log Return
                            </Button>
                        </div>

                        <div className="flex gap-8 text-black">
                            <div className="text-right">
                                <div className="text-sm text-gray-600">Items</div>
                                <div className="font-semibold">50</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-600">Value</div>
                                <div className="font-semibold">$750.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Trigger */}
                    <AccordionTrigger className="px-4 hover:no-underline text-left">
                        <span className="text-sm text-gray-700">View Details</span>
                    </AccordionTrigger>

                    {/* Accordion Content */}
                    <AccordionContent className="px-4 pb-4">
                        <div className="text-black flex justify-between my-5">
                            <div>
                                <div className="text-sm text-gray-600">Items sent</div>
                                <div className="font-semibold">50</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Items returned</div>
                                <div className="font-semibold">50</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Items sold</div>
                                <div className="font-semibold">50</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {invoiceItems.map((item) => (
                                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-medium text-black">{item.name}</div>
                                            <div className="text-sm text-gray-500">{item.code}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600">Total</div>
                                            <div className="font-semibold text-black">
                                                {item.quantity} × {item.price.toFixed(2)} ={" "}
                                                {item.total.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* Modals */}
            <Modal
                open={modal1Open}
                width={700}
                onCancel={() => setModal1Open(false)}
                footer={null}
            >
                <CreateInvoiceForm />
            </Modal>

            <Modal
                open={modal2Open}
                width={700}
                onCancel={() => setModal2Open(false)}
                footer={null}
            >
                <LogReturnedItemsDialog />
            </Modal>
        </div>
    );
}
