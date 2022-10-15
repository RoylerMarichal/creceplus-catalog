import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Api from "../api/apiManager";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { store } from "../redux/store";

function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);
 
  const [category, setCategory] = useState([]);
  const { categorySlug } = useParams();

  useEffect(() => window.scrollTo(0, 0));

  useEffect(() => {
   
    async function getProductsByCategory() {
      let json = await Api.getProductsByCategory(categorySlug);

      setProducts(json.products);
      
      //make array of photos of the photos of the products
      let photos = json.products.map((product) => {
        return {
          original: Api.UrlBase + product.photo,
          originalClass: "object-cover",
        };
      }
      );
      setPhotos(photos);
    }



    getProductsByCategory();
 
  }, []);

  const state = store.getState();

  useEffect(() => {
    document.title = state.shop.name;
  }, [])
  

  return (
    <div>
      <div className="grid grid-cols-5 bg-white">
        <div className="col-span-5 lg:col-span-3 ">
            <div className="relative lg:p-7    ">
              <div className="absolute z-10 left-3 top-3 text-white font-bold text-6xl">
                <Link to={"/"}>
                  <button>
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
                </Link> 
              </div>
              {/* ImageGallery of 100px height max */}
              <div className="h-96 lg:h-96">
                
              <ImageGallery items={photos} showPlayButton={false} showFullscreenButton={false} showNav={false} showBullets={false} showThumbnails={false} showIndex={true}
               />
               </div>
               
            </div>
         
        </div>
        <div className="-mt-32 lg:mt-0 col-span-5 lg:col-span-2 h-screen bg-white">
          <div className="  px-3 lg:px-14 ">
            <div className="flex flex-col">
              <div className="flex space-y-4 px-5 flex-col">
                <p className="text-gray-700 mb-10 text-2xl">{category.description}</p>
                {products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="text-gray-800 space-x-14 flex justify-between  text-right  "
                    >
                      <span className="flex-0 ">{product.name}</span>
                     
                      <div className="flex flex-auto text-right flex-col">
                        <span className="flex-auto">
                          ${Number(product.price).toFixed(2)}
                        </span>
                        
                       <a target="_blank" href={"https://wa.me/"+state.shop.phone+"?text=Hola!,%20me%20interesa%20el%20producto%20"+product.name.toString("utf8")+",lo%20vi%20en%20su%20web%20a%20través%20de%20CrecexDiez.com"  }>
                          <span className="truncate text-[#3fb87f] ">
                           Contactar por <br /> Whatsapp
                          </span>
                          </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
