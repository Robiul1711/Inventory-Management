import { Title14, Title24 } from '@/components/common/Title'
import React from 'react'

const TitleComponent = ({pathname}) => {
      const salesTitle = "Sales Dashboard";
      const productTitle = "Product Database";
      const artInventoryTitle = "Art Inventory";
      const stockManagementTitle = "Stock Management";
      const displayItemsManager = "Display Items Manager";
      const subtitle = "Track and manage your business sales performance";
      const customerTitle = "Customer Database";
      const gallaryList = "Gallary List";
      const storeList = "Store List";
      const expenseTitle = "Expense management";
      const invoiceTitle = "Invoice";
      const pricingCalculatorTitle = "Pricing Calculator";
      const consignmentTitle = "Consignment Manager";
      const factoryTitle = "Factory Payments";
  return (
    <div className=" flex flex-col gap-2">
                <Title24>
                  {pathname === "/dashboard"
                    ? salesTitle
                    : pathname === "/product-database"
                    ? productTitle
                    : pathname === "/art-inventory"
                    ? artInventoryTitle
                    : pathname === "/stock-management"
                    ? stockManagementTitle
                    : pathname === "/display-items-manager"
                    ? displayItemsManager
                    : pathname === "/customer-database"
                    ? customerTitle
                    : pathname === "/galleries-list"
                    ? gallaryList
                    : pathname === "/stores-list"
                    ? storeList
                    : pathname === "/expense"
                    ? expenseTitle
                    : pathname === "/invoice"
                    ? invoiceTitle
                    : pathname === "/pricing-calculator"
                    ? pricingCalculatorTitle
                    : pathname === "/consignment-manager"
                    ? consignmentTitle
                    : pathname === "/factory-payments"
                    ? factoryTitle
                    : salesTitle}
                </Title24>
                <Title14>{subtitle}</Title14>
              </div>
  )
}

export default TitleComponent