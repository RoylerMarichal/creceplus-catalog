import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../api/apiManager";
 

const CardCategory = (props) => {
 

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="shadow-lg hover:shadow-2xl bg-center bg-cover  cursor-pointer  rounded-lg"
      >
        <div
          className="h-full bg-center bg-cover bg-repeat-round rounded-lg "
          style={{ backgroundImage: "linear-gradient(#18172500, #181725)" }}
        >
          <div  className="flex flex-col">
            <span className="text-center px-3 text-xl text-white font-medium pt-[35%]">
              {props.name}
            </span>
            <Link
              className="  text-center lg:flex mb-7   w-2/3 mt-5 mx-auto button-white-primary"
              to={`/categoria/${props.slug}`}
            >
              <span className="text-center mx-auto">Ver catálogo</span>
            </Link>
            {/* {!show && <hr className="h-0.5 bg-gray-50 lg:hidden my-3 mx-7" />} */}
{/* 
            {!show && (
              <button
                onClick={reveal}
                className="flex lg:hidden mx-auto mt-4 text-white text-sm py-3 font-medium"
              >
                <span>View prices</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 pt-0.5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            )}
            {show && (
              <div className="flex pt-7 flex-col px-4">
                <div className="flex space-y-4 flex-col mx-auto">
                  <span className="text-white font-bold bg-gray-800 p-4 opacity-80">{props.description}</span>
                  {services.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="text-white  text-center px-3 flex "
                      >
                        <span className="flex-0 pr-2">{product.name}</span>
                        <span className="flex-auto pr-2 w-[50%]">
                          -----------
                        </span>
                        <div className="flex flex-auto text-right flex-col">
                          <span className="flex-auto">
                            ${Number(product.price).toFixed(2)}
                          </span>
                          <Link to={"/producto/" + product.slug}>
                            <span className="truncate italic text-[#D07D9C] ">
                              Ver detalles
                            </span>
                          </Link>
                          <div className="h-96 w-96">

                          </div>
                          <ImageGallery items={album} /> 
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {show && (
              <hr className="h-0.5 mt-5 bg-gray-50 lg:hidden my-3 mx-3" />
            )}

            {show && (
              <button
                onClick={reveal}
                className="flex mx-auto mt-4 text-white text-sm py-3 font-medium"
              >
                <span>View prices</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 pt-0.5 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
