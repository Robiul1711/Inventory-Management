import ConsignmentRowOne from '@/components/consignment/ConsignmentRowOne'
import ConsignmentRowTwo from '@/components/consignment/ConsignmentRowTwo'
import InvoiceAccordion from '@/components/consignment/InvoiceAccordion'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const ConsignmentManager = () => {
  return (
    <div className='space-y-6'>
      <div className="bg-[#eaf0fe] p-3 rounded flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-full   p-2.5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
              <path d="M11.2104 1.3871C11.9618 0.962366 12.3375 0.75 12.75 0.75C13.1625 0.75 13.5382 0.962366 14.2896 1.3871L23.2104 6.42978C23.9618 6.85451 24.3375 7.06688 24.5437 7.41667C24.75 7.76646 24.75 8.19119 24.75 9.04066V19.126C24.75 19.9755 24.75 20.4002 24.5437 20.75C24.3375 21.0998 23.9618 21.3122 23.2104 21.7369L14.2896 26.7796C13.5382 27.2043 13.1625 27.4167 12.75 27.4167C12.3375 27.4167 11.9618 27.2043 11.2104 26.7796L2.2896 21.7369C1.53822 21.3122 1.16253 21.0998 0.956267 20.75C0.75 20.4002 0.75 19.9755 0.75 19.126V9.04066C0.75 8.19119 0.75 7.76646 0.956267 7.41667C1.16253 7.06688 1.53822 6.85451 2.2896 6.42978L11.2104 1.3871Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.4173 3.77734L14.2627 5.48416C13.5244 5.88359 13.1553 6.08331 12.7507 6.08331C12.346 6.08331 11.9769 5.88359 11.2386 5.48416L8.08398 3.77734" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.7493 13.5704V27.4165M12.7493 13.5704L24.0827 7.4165M12.7493 13.5704L1.41602 7.4165" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M0.75 14.0833L4.60924 16.1613C5.32646 16.5475 5.68507 16.7406 5.8842 17.0876C6.08333 17.4346 6.08333 17.8664 6.08333 18.7299V23.4166" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24.7493 14.0833L20.8901 16.1613C20.1729 16.5475 19.8143 16.7406 19.6151 17.0876C19.416 17.4346 19.416 17.8664 19.416 18.7299V23.4166" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold text-base">
                Active Consignments
              </span>

            </div>

          </div>
        </div>

        <div className="">
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      <ConsignmentRowOne />
      <ConsignmentRowTwo />
      <InvoiceAccordion />
    </div>
  )
}

export default ConsignmentManager