import React from "react";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col">
            <span className="text-center px-3 text-xl text-white font-medium pt-[35%]">
              {props.name}
            </span>
            <Link
              className="  text-center lg:flex mb-7   w-2/3 mt-5 mx-auto button-white-primary"
              to={`/categoria/${props.slug}`}
            >
              <span className="text-center mx-auto">Ver catálogo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
