const PORT = 3500;
const HOST = 'koala-qr-backend.herokuapp.com'
const URL_BACKEND = `https://${HOST}/koala/`;
export const environment = {
  API_URL:`${URL_BACKEND}v1/`,
  API_PUBLIC:`${URL_BACKEND}v1-public/`,
  API_IMG:`https://${HOST}/public/`,
  HOST:`https://${HOST}/`,
  production: true,
  IMGBB:{
    KEY:"7d17dafb635716f80f36c32f317f80e0"
  }
};