import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiRestaurant from "../api/apiManager";

function ProductPage() {
  useEffect(() => window.scrollTo(0, 0));
  const {productSlug} = useParams();

  const [product,setProduct] = useState([]);

  const navigate = useNavigate()
  
  useEffect(()=>{
    async function getProduct(){
      let json =await apiRestaurant.getProduct(productSlug)
    
      setProduct(json.product)
    }

    getProduct();

  },[]);

 

  return (
    <div>
      <div className="hidden lg:grid grid-cols-5">
        <div className="lg:col-span-3 ">
          <div className="bg-cover  bg-center  h-screen bg-[url('/category.webp')]">
            <div className="relative bg-cover h-full bg-[url('/shadow-category.webp')]">
              <div className="absolute left-16 top-10 text-white font-bold text-6xl">
              
                  <button onClick={() => navigate(-1)}  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 bg-gray-100 text-gray-500 hover:opacity-70 rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
               
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 h-screen bg-black">
          <div className="py-20 px-14 ">
            <div className="flex flex-col">
              <div className="flex   flex-col">
                <span className="text-4xl text-white">
                {product.name}
                </span>
                <div key={2} maxlength="10" dangerouslySetInnerHTML={{ __html: product.description.substring(0, 25) }} className="text-white my-7" >
                </div>
                <p className="text-white font-bold">{product.price && '$'+Number(product.price).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="lg:hidden  h-full bg-fondo    px-3 lg:px-7">
      <div className="     pb-20   pt-20 px-3 lg:px-7">
        <div className="shadow-lg  hover:shadow-2xl bg-center bg-cover bg-no-repeat cursor-pointer   rounded-2xl bg-[url('/category.webp')]">
          <div className="relative h-full bg-center bg-cover bg-no-repeat rounded-lg bg-[url('/Shadow.webp')]">
            <Link className="absolute left-2 top-2" to={"/"}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </Link>
            <div className="flex py-10 flex-col">
              <span className="text-center px-3 text-4xl text-white font-medium pt-[30%]">
              {product.name}
              </span>
              <hr className="h-0.5 bg-gray-50 lg:hidden my-3 mx-7" />
              <div key={1} dangerouslySetInnerHTML={{ __html: product.description }} className="text-white px-3 text-center my-7" >
               </div>
              <span className="text-lg text-center font-bold text-white">{product.price && '$'+Number(product.price).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductPage;
