// const dotenv = require('dotenv');
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// dotenv.config({path:'./config.env'});

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
  // appId: process.env.REACT_APP_FIREBASE_APPI_ID,
  apiKey: "AIzaSyCN-JGE4B3lMAkP9sxK1hyNjwwz7SY6j5U",
  authDomain: "music-player-6d51c.firebaseapp.com",
  projectId: "music-player-6d51c",
  storageBucket: "music-player-6d51c.appspot.com",
  messagingSenderId: "823502455747",
  appId: "1:823502455747:web:9393482c1f7f0ef2d8b376",
  measurementId: "G-80M7W8FHMS"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };

// const analytics = getAnalytics(app);
// export { app, analytics };
