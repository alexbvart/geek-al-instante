export const API_URL                 =   'https://ecommerce-platzi.herokuapp.com/api';


export const PRODUCTS                =   `${API_URL}/products`;           /* ALL */    //* GET
export const PRODUCTS_CREATE         =   `${PRODUCTS}/create`;                         //_ POST
/* export const PRODUCTS_ID             =   `${PRODUCTS}/`; */             /* :id */    //* GET
export const PRODUCTS_UPDATE         =   `${PRODUCTS}/update`;            /* :id */    //? PUT
export const PRODUCTS_DELETE         =   `${PRODUCTS}/delete`;            /* :id */    //! DELETE
export const PRODUCTS_UPLOAD_IMAGE   =   `${PRODUCTS}/uploadimage`;                    //_ POST
export const PRODUCTS_CREATE_REVIEW  =   `${PRODUCTS}/createreview`;      /* :id */    //_ POST
export const PRODUCTS_SEARCH         =   `${PRODUCTS}/?keyword=`;                       //* GET
export const PRODUCT_TOP             =   `${PRODUCTS}/topproducts`;                    //* GET


export const CATEGORIES              =   `${PRODUCTS}/categories`;         /* ALL */   //* GET
export const CATEGORIES_CREATE       =   `${PRODUCTS}/createcategories`;               //_ POST
/* export const CATEGORIES              =   `${PRODUCTS}/categories/`; */   /* :id */   //* GET
export const CATEGORIES_DELETE       =   `${PRODUCTS}/deletecategories`;   /* :id */   //! DELETE
export const CATEGORIES_UPDATE       =   `${PRODUCTS}/updatecategories`;   /* :id */   //? PUT


export const USERS                   =   `${API_URL}/users`;               /* ALL */   //* GET
export const USERS_REGISTER          =   `${USERS}/register`;                          //_ POST
/* export const USERS                   =   `${PRODUCTS}/users/`; */        /* :id */   //* GET
export const USERS_DELETE            =   `${USERS}/delete`;                /* :id */   //! DELETE
export const USERS_UPDATE            =   `${USERS}/update`;                /* :id */   //? PUT
export const USERS_PROFILE           =   `${USERS}/profile`;                           //* GET


export const PAY_ADD_METHOD          =   `${USERS}/addpaymentmethod`;      /* :id */    //_ POST
export const PAY_RETRIEVE_METHOD     =   `${USERS}/retrievepaymentmethod`; /* :id */    //* GET
export const PAY_CHANGE_DEFAULT      =   `${USERS}/changedefaultpayment`;  /* :id */    //? PUT


export const ADDRESS_ADD             =   `${USERS}/addshippingaddress`;  /* :id */     //_ POST
export const ADDRESS_RETRIEVE        =   `${USERS}/addshippingaddress`;  /* :id */     //* GET
export const ADDRESS_CHANGE_DEFAULT  =   `${USERS}/change-default-shipping-address`;   /* :id */    //? PUTT
export const ADDRESS_DELETE          =   `${USERS}/deleteshippingaddress`
;/* :id */    //! DELETE


export const COUPON_ADD               =   `${USERS}/addcoupon`;           /* :id */    //? PUT


export const ORDERS                   =   `${API_URL}/orders`;             /* ALL */   //* GET
export const ORDERS_CREATE            =   `${ORDERS}/add`;                             //_ POST
/* export const ORDERS              =   `${API_URL}/orders/`; */            /* :id */   //* GET
export const ORDERS_PAY               =   `/pay/`;                                      //? PUT
/* //! {{URL}}/api/orders/:id/pay/ PUT  */
export const ORDERS_DELIVER           =   `/deliver/`;                                  //? PUT
/* //! {{URL}}/api/orders/:id/deliver/ PUT  */
export const ORDERS_ALL               =   `${ORDERS}/allorders`;                       //* GET
export const ORDERS_MY                =   `${ORDERS}/myorders`;                        //* GET



export const COUPON                   =   `${ORDERS}/coupons`;             /* ALL */   //* GET
export const COUPON_CREATE            =   `${ORDERS}/createcoupon`;                    //_ POST    
export const COUPON_GET               =   `${ORDERS}/getcoupon`;                       //_ POST    /*? DUDAS ?*/ LA URL DICE GET PERO EL METODO ES POST ?
/* export const COUPON                   =   `${ORDERS}/coupons/`; */       /* :id */   //* GET
export const COUPON_DELETE            =   `${USERS}/deletecoupon`;         /* :id */   //! DELETE
export const COUPON_UPDATE            =   `${USERS}/updatecoupon`;         /* :id */   //? PUT





