//const UrlBase = "https://crecexdiez.com";


const UrlBase = "http://127.0.0.1:8000";
const UrlApiBase = UrlBase + "/api/v1";
 
const shopSlug = 'f65seQ1RLvv01oUz';
 

export default {
  
  getShop: async (shopSlug) => {
    let urlApi = "/shop/front/"+shopSlug;
    const request = await fetch(UrlApiBase + urlApi);
    if (request) {
      return await request.json();
    }
  },

  getCategory: async (categorySlug) => {
  
    let urlApi = "/shops/front/" + shopSlug + "/" + categorySlug;

    const request = await fetch(UrlApiBase + urlApi);

    if (request) {
      if (request && request.status == 200) {
        return await request.json();
      }

      return request.message;
    }
  },

  saveBook: async (shopSlug,serviceId,serviceDay,clientName,clientEmail,clientPhone) => {
    let urlApi = '/shops/books/new';

    const request = await fetch(UrlApiBase  + urlApi, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({shopSlug, serviceId,serviceDay,clientName,clientEmail,clientPhone})
    });
    if(request){
        return await request.json();
    }
  },

  getAlbunByCategory: async (categorySlug) => {
    let urlApi = "/shops/front/" + shopSlug + "/" + categorySlug + "/album";

    const request = await fetch(UrlApiBase + urlApi);

    if (request) {
      if (request && request.status == 200) {
        return await request.json();
      }

      return request.message;
    }
  },

  getRandomPhotos: async () => {
    let urlApi = "/studiophotos/" + shopSlug + "/photos";

    const request = await fetch(UrlApiBase + urlApi);

    if (request) {
      if (request && request.status == 200) {
        return await request.json();
      }

      return request.message;
    }
  },

  getServicesByCategory: async (categorySlug) => {
    let urlApi = "/shops/front/" + shopSlug + "/" + categorySlug + "/services";

    const request = await fetch(UrlApiBase + urlApi);

    if (request) {
      if (request && request.status == 200) {
        return await request.json();
      }

      return request.message;
    }
  },

  getProductsByCategory: async (categorySlug) => {
    let urlApi = "/shops/front/categories/" + shopSlug + "/" + categorySlug + "/products";

    const request = await fetch(UrlApiBase + urlApi);

    if (request) {
      if (request && request.status == 200) {
        return await request.json();
      }

      return request.message;
    }
  },

  getCategories: async (shopSlug) => {
    let urlApi = "/shops/front/categories/" + shopSlug + "/categories";

    const request = await fetch(UrlApiBase + urlApi);
    if (request && request.status == 200) {
      return await request.json();
    } else {
      return "500";
    }
  },

  getProduct: async (productSlug) => {
    let urlApi = "/product/" + productSlug;

    const request = await fetch(UrlApiBase + urlApi);

    if (request && request.status == 200) {
      return await request.json();
    } else {
      return "500";
    }
  },

  UrlBase,
  shopSlug,
};
