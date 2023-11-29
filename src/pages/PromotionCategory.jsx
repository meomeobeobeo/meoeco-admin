import React, { useState } from "react";
import RenderForm from "../components/RenderForm";
import FORMS from "../config/form.json"
import TABLES from "../config/table.json";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import RenderTable from "../components/RenderTable";
const PromotionCategory = () => {
  const [activeTab, setActiveTab] = useState("create-infor");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="w-full">
      <Tabs className="w-full" activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Create product category information" key="create-infor">
          <RenderForm mode={"create"} formFormat={FORMS.promotionCategoryInformation} />
        </TabPane>
        <TabPane tab="Table product-category list" key="table-infor">
          {/* <RenderTable  tableFormat={TABLES.test} /> */}
          <RenderTable tableFormat={TABLES.promotionCategoryInformation} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PromotionCategory;
