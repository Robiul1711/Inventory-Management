import InvoiceDatabaseInfo from '@/components/invoiveComponents/InvoiceDatabaseInfo'
import React from 'react'
import InvoiceInventoryItems from './InvoiceInventoryItems'

const Invoices = () => {
  return (
       <div className=' flex flex-col gap-8'>
        <InvoiceDatabaseInfo/>
        <InvoiceInventoryItems/>
    </div>
  )
}

export default Invoices