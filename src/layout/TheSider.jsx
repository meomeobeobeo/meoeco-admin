import React, { useState } from "react";

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { MdDashboard, MdManageHistory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { BiFilm } from "react-icons/bi";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const itemNavs = [
  getItem("Dashboard", "/dashboard", <MdDashboard />),
  getItem("Country", "/country", <FcFeedback />),

  getItem("Setting DATA MOBILE APP", "settingData", <DesktopOutlined />, [
    getItem("Out standing product", "/outstanding-products", <FcFeedback />),
    getItem("Selling product", "/selling-products", <FcFeedback />),
   
  ]),

  getItem("Product manager", "sub1", <DesktopOutlined />, [
    getItem("Product category", "/product-category", <FcFeedback />),
    getItem("Products", "/products", <FcFeedback />),
    getItem("Product Items", "/product-items", <FcFeedback />),
  ]),
  getItem("Product variation", "sub2", <DesktopOutlined />, [
    getItem("Variation Product", "/variation", <FcFeedback />),
    getItem("Variation option Product", "/variation-option", <FcFeedback />),
  ]),
  getItem("Promotion", "sub3", <DesktopOutlined />, [
    getItem("Promotion", "/promotion", <FcFeedback />),
    getItem("Promotion category", "/promotion-category", <FcFeedback />),
  ]),
  getItem("Payment type", "/payment-type", <FcFeedback />),
  getItem("Product configuration", "/product-configuration", <FcFeedback />),
];

const TheSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onClickMenu = (e) => {
    navigate(e.key);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="w-full flex justify-center items-center h-32 font-semibold text-lg text-slate-100">
        MEOECO-ADMIN
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={itemNavs}
        onClick={onClickMenu}
      />
    </Sider>
  );
};

export default TheSider;
