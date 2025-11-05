import DisplayItems from "@/components/displayItemManager/DisplayItems";
import DisplayItemsInfo from "@/components/displayItemManager/DisplayItemsInfo";
import React from "react";

const DisplayItemManager = () => {
  return (
    <div>
      <DisplayItemsInfo />
      <DisplayItems/>
    </div>
  );
};

export default DisplayItemManager;
