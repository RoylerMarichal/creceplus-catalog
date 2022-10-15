import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import BookPage from "./pages/BookPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/categoria/:categorySlug" element={<CategoryPage />} />
      <Route path="/producto/:productSlug" element={<ProductPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/book/:categoryId/:serviceId" element={<BookPage />} />
     {/*  <Route path="*" element={<PagNotFound />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  </Provider>
);
 