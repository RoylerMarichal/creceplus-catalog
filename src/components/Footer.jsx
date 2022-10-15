import React from "react";
import { store } from "../redux/store";

function Footer() {
  const state = store.getState();
  return (
    <div className=" bg-color">
      <footer className="py-14 px-10 flex flex-col container">
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="flex flex-col">
            {state.shop.address && (
              <div className="flex">
                <img src="/location.png" className="h-6 text-white w-7" />
                <span className="text-white pl-3">{state.shop.address}</span>
              </div>
            )}

            {state.shop.phone && (
              <div className="flex pt-3">
                <img src="/phone.png" className="h-6 text-white w-6" />
                <span className="text-white pl-3">{state.shop.phone}</span>
              </div>
            )}
          </div>
          <div className="flex my-7 lg:my-0" id="contact">
            <span className="font-bold text-white text-3xl">Síguenos</span>
            <div className="flex space-x-3 ml-3">
              {state.shop.instagram_link && (
                <a href={state.instagram_link}>
                  <img
                    src="/instagram.png"
                    className="h-8 w-8 cursor-pointer hover:opacity-80"
                  />
                </a>
              )}
              {state.shop.phone && (
                <a href={`https://wa.me/${state.shop.phone}`}>
                  <img
                    src="/phone.png"
                    className="h-8 w-8 cursor-pointer hover:opacity-80"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex mt-20 mx-auto space-y-2 flex-col">
          <hr className="h-0.5 w-68 bg-white" />
          <span className="text-white text-center">
            {state.shop.name} {new Date().getFullYear()}
          </span>
          <span className="text-white text-center text-sm">
            Desarrollado por{" "}
            <a href="https://crecexdiez.com/e/creceplus">CrecexDiez</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
