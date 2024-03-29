// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import { domain, clientId, firebase  } from './../app/auth_config.json';

export const environment = {
  production: false,
    redirectUri: window.location.origin,
    useRefreshTokens: true,
    firebase: {
      "apiKey": "AIzaSyBfrBi5jmgun1aOiu_qPZacEpkAzucxJtM",
      "authDomain": "portfoliowebsite-28f8a.firebaseapp.com",
      "projectId": "portfoliowebsite-28f8a",
      "storageBucket": "portfoliowebsite-28f8a.appspot.com",
      "messagingSenderId": "1013106730498",
      "appId": "1:1013106730498:web:45b1fd0f0b38223e4de91b",
      "measurementId": "G-CNT2MJ0QWV"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
