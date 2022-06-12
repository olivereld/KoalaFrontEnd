// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const PORT = 3500;
const HOST = '192.168.1.109'
const URL_BACKEND = `http://${HOST}:${PORT}/koala/`;
export const environment = {
  API_URL:`${URL_BACKEND}v1/`,
  API_PUBLIC:`${URL_BACKEND}v1-public/`,
  API_IMG:`http://${HOST}:${PORT}/public/`,
  HOST:`http://${HOST}:${PORT}/`,
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
