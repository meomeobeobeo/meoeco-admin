import axios from "axios";

const baseUrl = "http://localhost:3002";
const API = axios.create({ baseURL: baseUrl });

// country
export const createCountry = ({ formData }) => {
  return API.post("/admin/country", formData);
};
export const getAllCountry = () => {
  return API.get("/admin/country");
};
export const updateCountry = ({ id, formData }) => {
  return API.patch(`/admin/country/${id}`, formData);
};
export const deleteCountry = ({ id }) => {
  return API.delete(`/admin/country/${id}`);
};

//payment type
export const createPaymentType = ({ formData }) => {
  return API.post("/admin/payment-type", formData);
};
export const getAllPaymentType = () => {
  return API.get("/admin/payment-type");
};
export const updatePaymentType = ({ id, formData }) => {
  return API.patch(`/admin/payment-type/${id}`, formData);
};
export const deletePaymentType = ({ id }) => {
  return API.delete(`/admin/payment-type/${id}`);
};


// product
export const createProduct = ({ formData }) => {
  
  return API.post("/admin/product", formData);
};
export const getAllProduct = () => {
  return API.get("/admin/product");
};
export const updateProduct = ({ id, formData }) => {
  return API.patch(`/admin/product/${id}`, formData);
};
export const deleteProduct = ({ id }) => {
  return API.delete(`/admin/product/${id}`);
};


// product category
export const createProductCategory = ({ formData }) => {
  return API.post("/admin/product-category", formData);
};
export const getAllProductCategory = () => {
  return API.get("/admin/product-category");
};
export const updateProductCategory = ({ id, formData }) => {
  return API.patch(`/admin/product-category/${id}`, formData);
};
export const deleteProductCategory = ({ id }) => {
  return API.delete(`/admin/product-category/${id}`);
};

//product-configuration
export const createProductConfiguration = ({ formData }) => {
  return API.post("/admin/product-configuration", formData);
};
export const getAllProductConfiguration = () => {
  return API.get("/admin/product-configuration");
};
export const updateProductConfiguration = ({ id, formData }) => {
  return API.patch(`/admin/product-configuration/${id}`, formData);
};
export const deleteProductConfiguration = ({ id }) => {
  return API.delete(`/admin/product-configuration/${id}`);
};

//

//product-items
export const createProductItems = ({ formData }) => {
  return API.post("/admin/product-items", formData);
};
export const getAllProductItems = () => {
  return API.get("/admin/product-items");
};
export const updateProductItems = ({ id, formData }) => {
  return API.patch(`/admin/product-items/${id}`, formData);
};
export const deleteProductItems = ({ id }) => {
  return API.delete(`/admin/product-items/${id}`);
};

//promotion
export const createPromotion = ({ formData }) => {
  return API.post("/admin/promotion", formData);
};
export const getAllPromotion = () => {
  return API.get("/admin/promotion");
};
export const updatePromotion = ({ id, formData }) => {
  return API.patch(`/admin/promotion/${id}`, formData);
};
export const deletePromotion = ({ id }) => {
  return API.delete(`/admin/promotion/${id}`);
};

//promotion-category
export const createPromotionCategory = ({ formData }) => {
  return API.post("/admin/promotion-category", formData);
};
export const getAllPromotionCategory = () => {
  return API.get("/admin/promotion-category");
};
export const updatePromotionCategory = ({ id, formData }) => {
  return API.patch(`/admin/promotion-category/${id}`, formData);
};
export const deletePromotionCategory = ({ id }) => {
  return API.delete(`/admin/promotion-category/${id}`);
};

//variation
export const createVariation = ({ formData }) => {
  return API.post("/admin/variation", formData);
};
export const getAllVariation = () => {
  return API.get("/admin/variation");
};
export const updateVariation = ({ id, formData }) => {
  return API.patch(`/admin/variation/${id}`, formData);
};
export const deleteVariation = ({ id }) => {
  return API.delete(`/admin/variation/${id}`);
};

//variation-option
export const createVariationOption = ({ formData }) => {
  return API.post("/admin/variation-option", formData);
};
export const getAllVariationOption = () => {
  return API.get("/admin/variation-option");
};
export const updateVariationOption = ({ id, formData }) => {
  return API.patch(`/admin/variation-option/${id}`, formData);
};
export const deleteVariationOption = ({ id }) => {
  return API.delete(`/admin/variation-option/${id}`);
};

export const createFilmInformation = ({ formData }) => {
  return API.post("/blue/films", formData);
};

export const getFilmInformation = () => {
  return API.get("/blue/films");
};
export const deleteFilmInformation = ({ id }) => {
  return API.delete(`/blue/films/${id}`);
};
export const updateFilmInformation = ({ id, formData }) => {
  return API.patch(`/blue/films/${id}`, formData);
};

export const createNewDocFilmMamager = ({ formData }) => {
  return API.post("/blue/filmManager", formData);
};
export const getFilmManagerInformation = () => {
  return API.get("/blue/filmManager");
};
export const deleteFilmManagerInformation = ({ id }) => {
  return API.delete(`/blue/filmManager/${id}`);
};
export const updateFilmManagerInformation = ({ id, formData }) => {
  return API.patch(`/blue/filmManager/${id}`, formData);
};

export const createFoodInformation = ({ formData }) => {
  return API.post("/blue/food", formData);
};
export const getFoodInformation = () => {
  return API.get("/blue/food");
};
export const deleteFoodInformation = ({ id }) => {
  return API.delete(`/blue/food/${id}`);
};
export const updateFoodInformation = ({ id, formData }) => {
  return API.patch(`/blue/food/${id}`, formData);
};
export const getDataForDashBoard = () => {
  return API.post(`/dashBoard/getDataForDashBoard`);
};
export const getDataforTicketManager = () => {
  return API.get(`/dashBoard/getDataforTicketManager`);
};
