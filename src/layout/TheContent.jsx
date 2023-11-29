import React, { useState } from "react";

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Route, Routes } from "react-router-dom";
import FilmInformation from "../pages/FilmInformation/FilmInformation";
import FilmManager from "../pages/FilmManager/FilmManager";
import Tickets from "../pages/Tickets";
import Bill from "../pages/Bill";
import FeedBack from "../pages/FeedBack";
import DashBoard from "../pages/DashBoard";
import Food from "../pages/Food";
const { Header, Content, Footer, Sider } = Layout;
import { useLocation } from "react-router-dom";
import Country from "../pages/Country/Country";
import ProductCategory from "../pages/ProductCategory";
import PromotionCategory from "../pages/PromotionCategory";
import Promotion from "../pages/Promotion";
import Variation from "../pages/Variation";
import VariationOption from "../pages/VariationOption";
import ProductItems from "../pages/ProductItems";
import Products from "../pages/Product";
import PaymentType from "../pages/PaymentType";

const TheContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const currentPath = location.pathname.substring(1);

  return (
    <Layout className="site-layout">
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>{currentPath}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />

            <Route path="/bills" element={<Bill />} />
            <Route path="/feedback" element={<FeedBack />} />

            <Route path="/country" element={<Country />} />
            <Route path="/product-category" element={<ProductCategory />} />
            <Route path="/promotion-category" element={<PromotionCategory />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/products" element={<Products />} />
            <Route path="/variation" element={<Variation />} />
            <Route path="/variation-option" element={<VariationOption />} />
            <Route path="/product-items" element={<ProductItems />} />
            <Route path="/payment-type" element={<PaymentType />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ticket cinema admin @2023
      </Footer>
    </Layout>
  );
};

export default TheContent;
