const PORT = 3500;
const HOST = '143.198.186.9'
const URL_BACKEND = `http://${HOST}:${PORT}/koala/`;
export const environment = {
  API_URL:`${URL_BACKEND}v1/`,
  API_PUBLIC:`${URL_BACKEND}v1-public/`,
  API_IMG:`http://${HOST}:${PORT}/public/`,
  production: true
};