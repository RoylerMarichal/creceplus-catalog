 
//LOCAL O PRODUCTION
const environment = "local";
const keyTestLocal = 'f65seQ1RLvv01oUz';

const UrlBase = environment === "production" ? "https://crecexdiez.com" : "http://127.0.0.1:8000";
const shopSlug = environment === "production" ? process.env.CRECEXDIEZ_SHOP_KEY : keyTestLocal;

const UrlApiBase = UrlBase + "/api/v1";

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

  UrlBase,
  shopSlug,
};
