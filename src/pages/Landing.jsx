import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/apiManager";
import CardCategory from "../components/CardCategory";
import { store } from "../redux/store";
import "react-image-gallery/styles/css/image-gallery.css";

function Landing() {
  const shopSlug = Api.shopSlug;
  const state = store.getState();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      let json = await Api.getCategories(shopSlug);
      if (json != 500) {
        setCategories(json.categories);
      }
    }

    getCategories();
  }, []);

  useEffect(() => {
    document.title = state.shop.name;
    //Change the favicon
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = Api.UrlBase + state.shop.logo;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  return (
    <div>
      <div className="mb-20 mt-10 max-w-4xl mx-auto flex flex-col">
        <h2 className="text-2xl font-medium uppercase mx-auto">
          {state.shop.business_type == 1
            ? "Tienda online"
            : state.shop.business_type == 2
            ? "Estudio Fotográfico"
            : "Productos"}
        </h2>
        <h1 className="text-4xl main-color font-bold mx-auto uppercase  ">
          {state.shop.name}
        </h1>

        <img
          className="w-48 h-48 mt-10 lg:w-96 object-cover rounded-full lg:h-96 mx-auto "
          src={Api.UrlBase + state.shop.avatar}
          alt={state.shop.name}
        />
      </div>

      <div
        className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 pb-14 pt-48 -mt-48 h-full lg:px-7"
        id="services"
      >
        <div className="grid  grid-cols-2 p-3  lg:px-20 mx-auto max-w-4xl">
          {categories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="py-4 px-1 lg:p-3 col-span-2 lg:col-span-1"
              >
                <CardCategory
                  img={Api.UrlBase + cat.avatar}
                  name={cat.name}
                  slug={cat.slug}
                  description={cat.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`bg-fixed bg-cover bg-center lg:bg-top `}
        style={{
          backgroundImage: `url("${Api.UrlBase + state.shop.cover}")`,
        }}
      >
        <div
          className="  lg:px-7 py-48 "
          style={{ backgroundImage: "linear-gradient(#13172500, #131725)" }}
        >
          <div className="mx-auto max-w-7xl   px-4 text-center sm:px-6   lg:px-8">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="  text-white">Contáctanos por WhatsApp</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  target={"_blank"}
                  href={"https://wa.me/" + state.shop.phone}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#075E54] px-5 py-3 text-base font-medium text-white hover:bg-black-700"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
