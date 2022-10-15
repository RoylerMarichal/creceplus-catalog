/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { store } from "../redux/store";
import apiManager from "../api/apiManager";

export default function Header() {
  const [open, setOpen] = useState(false);
  const state = store.getState();

  return (
    <div className="container">
      {console.log(state.shop)}
      <nav className="flex max-w-6xl mx-auto justify-between">
        <Link to={"/"}>
          {" "}
          <img
            className="h-10"
            src={apiManager.UrlBase+state.shop.avatar}
            alt="Ernesto Herrera Photography"
          />
        </Link>
        <div className="flex">
          <a
            className="text-lg hidden lg:flex font-inter uppercase text-gray-800 font-medium px-3 pt-1"
            href="/#services"
          >
            Productos
          </a>
          <a
            className="text-lg  hidden lg:flex font-inter uppercase text-gray-800 font-medium px-3 pt-1"
            href="/#contact"
          >
            Acerca de
          </a>
          <a
            className="text-lg  hidden lg:flex font-inter uppercase text-gray-800 font-medium px-3 pt-1"
            href="/#contact"
          >
            Contactar
          </a>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white pt-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white main-color hover:text-gray-500 focus:outline-none focus:outline-none  "
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6 main-color"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative  pt-20 lg:pt-0 lg:mt-24 flex-1 px-4 sm:px-6">
                        <div className=" px-4 sm:px-6">
                          <div
                            className="  mx-auto justify-center flex flex-col space-y-3 "
                            aria-hidden="true"
                          >
                            <Link to={"/"}>
                              <a
                                onClick={() => setOpen(!open)}
                                className="text-2xl  self-center  "
                              >
                                Productos
                              </a>
                            </Link>
                            <Link to={"/"}>
                              <a
                                onClick={() => setOpen(!open)}
                                className=" text-2xl self-center  "
                              >
                                Contactar
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex bottom-0 absolute flex-col py-7 lg:py-20 px-7  text-white bg-color">
                        <div className="flex  flex-col">
                          <div className="flex  flex-col">
                            <img
                              src="location.png"
                              className="h-6 text-white mx-auto mb-2 w-7"
                            />
                            <span className="text-white text-center pl-3">
                              {state.shop.address}
                            </span>
                          </div>
                          <div className="flex pt-3 flex-col">
                            <img
                              src="phone.png"
                              className="h-6 text-white mx-auto mb-2 w-6"
                            />
                            <span className="text-white text-center pl-3">
                              {state.shop.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-20 mx-auto space-y-2 flex-col">
                        <hr className="h-0.5 w-68 bg-white" />
                        <span className="text-white text-center">
                          {state.shop.name} {new Date().getFullYear()}
                        </span>
                        <span className="text-white text-center text-sm">
                          Desarrollado con {" "}
                          <a href="https://crecexdiez.com">CrecexDiez</a>
                        </span>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
