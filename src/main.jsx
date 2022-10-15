import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import CategoryPage from "./pages/CategoryPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/categoria/:categorySlug" element={<CategoryPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </Provider>
);
 