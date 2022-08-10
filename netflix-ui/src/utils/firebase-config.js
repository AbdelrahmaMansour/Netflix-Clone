import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_o3GE3cXtj15cCEIlHsPswWIrMhqKxJY",
  authDomain: "netflix-clone-60b21.firebaseapp.com",
  projectId: "netflix-clone-60b21",
  storageBucket: "netflix-clone-60b21.appspot.com",
  messagingSenderId: "613876969813",
  appId: "1:613876969813:web:f617d682cd0bb8e2abffdc",
  measurementId: "G-CNRCGWG13M",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
