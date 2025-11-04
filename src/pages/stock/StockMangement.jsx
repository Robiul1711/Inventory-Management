import InventoryItems from '@/components/stockMangement/InventoryItems'
import StockManagementInfo from '@/components/stockMangement/StockManagementInfo'
import React from 'react'

const StockMangement = () => {
  return (
    <div className=' flex flex-col gap-8'>
        <StockManagementInfo/>
        <InventoryItems/>
    </div>
  )
}

export default StockMangement