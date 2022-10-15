import React, { useState } from "react";
import { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import Api from "../api/apiManager";
import { store } from "../redux/store";

function BookPage() {
  const { serviceId, categoryId } = useParams();
  const [clientName, setClientName] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [clientEmail, setClientEmail] = useState();

  const state = store.getState();
  const [categories, setCategories] = useState([]);
  const [step, setStep] = useState("category");
  const [services, setServices] = useState([]);
  const [categorySelected, setCategorySelected] = useState(categoryId);
  const [serviceSelected, setServiceSelected] = useState(serviceId);
  const [daySelected, setDaySelected] = useState(false);
  const [date, onChange] = useState(new Date());


  useEffect(() => {
    async function getCategories() {
      let json = await Api.getCategories(state.shop.slug);
      if (json != 500) {
        setCategories(json.categories);
      }
    }

    if(categorySelected && serviceSelected){
      setStep('date');
    }

    getCategories();
  }, []);

  async function getServicesByCategory(categorySlug) {
    let json = await Api.getServicesByCategory(categorySlug);
    setServices(json.services);
  }

  async function getCategory(categorySlug) {
    let json = await Api.getCategory(categorySlug);
    return json.category;
  }

  async function changeCategory(categorySlug) {
    let category = await getCategory(categorySlug);

    setCategorySelected(category.id);
    getServicesByCategory(category.slug);

    setStep('service');
  }


  async function saveBook(){
    let shopSlug = Api.shopSlug; 
    let json = await Api.saveBook(shopSlug,serviceSelected,daySelected,clientName,clientEmail,clientPhone);

    if(json.code == 'ok'){
      setStep('success')
    } 

  }

  return (
    <div>
      <div className="max-w-2xl mb-20 mx-auto p-7">

        {step === "category" && (
          <div className="flex flex-col  ">
            <span className="subtitle mb-3 uppercase pt-20 text-3xl">
              Select service to Book
            </span>
            {categories.map((cat) => {
              return (
                <div
                  onClick={() => changeCategory(cat.slug)}
                  key={cat.id}
                  className={`p-4 ${categorySelected === cat.id && `bg-green-100`} cursor-pointer border-2 hover:shadow-md flex justify-between border-gray-800 my-1  `}
                >
                  <span className="text-lg ">{cat.name}</span>
                  <button onClick={() => changeCategory(cat.slug)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 hover:w-7 hover:opacity-70 hover:h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {step === "service" && (
          <div className="flex flex-col ">
            <button
              onClick={() => setStep('category')}
              className="pt-20 "
            >
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <span className="subtitle mb-3 mt-3 uppercase  text-3xl">
              Select service to Book in
              {categories.filter((cat) => cat.id === categorySelected)[0].name}
            </span>
            {services
              .filter((ser) => ser.category_id === categorySelected)
              .map((ser) => {
                return (
                  <div
                    onClick={() => {setServiceSelected(ser.id); setStep('date')}}
                    key={ser.id}
                    className={`p-4 ${serviceSelected === ser.id && `bg-green-100`}  cursor-pointer border-2 hover:shadow-md flex justify-between border-gray-800 my-1 `}
                  >
                    <span className="text-lg">
                      {ser.name} --- ${Number(ser.price).toFixed(2)}
                    </span>
                    <button onClick={() => setServiceSelected(ser.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:w-7 hover:opacity-70 hover:h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
          </div>
        )}
        {step === "date" && (
          <div className="flex flex-col">
            <button
              onClick={() =>  {
                if(services.length != 0){
                 setStep('service')
              }else{
                setStep('category')
              
              } }}
              className="pt-20"
            >
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <span className="subtitle mb-3 mt-3 uppercase  text-3xl">
              Select date
            </span>
            <div className="flex flex-col max-x-lg  ">
              <Calendar
                tileDisabled={({ activeStartDate, date, view }) =>
                  date.getDay() === 0
                }
                minDate={new Date()} // will not allow date later than today
                //   selectRange={true}
                onChange={onChange}
                value={date}
              />
              <button
                onClick={() => {setDaySelected(date.toDateString()); setStep('client')}}
                className="btn-black"
              >
                Book now on{" "}
                {date.length > 0 ? (
                  <p className="text-center">
                    <span className="bold">Start:</span>{" "}
                    {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">End:</span> {date[1].toDateString()}
                  </p>
                ) : (
                  <p className="text-center">
                    <span className="bold"></span> {date.toDateString()}
                  </p>
                )}
              </button>
            </div>
          </div>
        )}


        {
         step === 'client' && 
         <div>
         <div className="flex flex-col">
           <button
             onClick={() => { 
              setStep('date')
             }}
             className="pt-20"
           >
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
                 d="M15.75 19.5L8.25 12l7.5-7.5"
               />
             </svg>
           </button>
           <span className="subtitle mb-3 mt-3 uppercase  text-3xl">
             About you
           </span>
           <div className="flex flex-col max-x-lg  ">

             <input type="text" onChange={(e) => setClientName(e.target.value)} className="input-text  " placeholder="Name" />
             <input type="text" onChange={(e) => setClientEmail(e.target.value)} className="input-text  " placeholder="Email" />
             <input type="text" onChange={(e) => setClientPhone(e.target.value)} className="input-text  " placeholder="Phone" />
          
             <button onClick={()=>saveBook()} className="btn-black">Complete Book</button>
            

           </div>
         </div>
       </div>
        }

{
         step === 'success' && 
         <div>
         <div className="flex flex-col">
           <button
             onClick={() => {
              setStep('category')
             }}
             className="pt-20"
           >
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
                 d="M15.75 19.5L8.25 12l7.5-7.5"
               />
             </svg>
           </button>
           <span className="subtitle mb-3 mt-3 uppercase  text-3xl">
           Reserve completed
           </span>
           <div className="flex flex-col max-x-lg  ">

              <span className="text-2xl font-medium">Your reserve has succefull sended</span>
              <span className="text-lg font-medium">Soon we will contact you to finalize details</span>
            

           </div>
         </div>
       </div>
        }
       
        
      </div>
    </div>
  );
}

export default BookPage;
