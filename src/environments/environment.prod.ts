const PORT = 3500;
const HOST = 'koala-datos-empleados.herokuapp.com'
const URL_BACKEND = `https://${HOST}/koala/`;
export const environment = {
  API_URL:`${URL_BACKEND}v1/`,
  API_PUBLIC:`${URL_BACKEND}v1-public/`,
  API_IMG:`https://${HOST}/public/`,
  HOST:`https://${HOST}/`,
  production: true
};