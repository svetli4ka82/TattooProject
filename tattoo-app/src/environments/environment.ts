// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyC-wrTd5IgR7xweaGgLnaN3HJz4JxSqv7A",
    authDomain: "tattoo-catalog.firebaseapp.com",
    databaseURL: "https://tattoo-catalog.firebaseio.com",
    projectId: "tattoo-catalog",
    storageBucket: "tattoo-catalog.appspot.com",
    messagingSenderId: "84750929354"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
