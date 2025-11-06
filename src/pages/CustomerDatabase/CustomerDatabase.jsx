import CustomerDatabaseInfo from "@/components/CustomerDatabase/CustomerDatabaseInfo";
import CustomerDatabaseTable from "@/components/CustomerDatabase/CustomerDatabaseTable";
import React from "react";

const CustomerDatabase = () => {
  return (
    <div>
      <CustomerDatabaseInfo />
      <CustomerDatabaseTable/>
      
    </div>
  );
};

export default CustomerDatabase;
