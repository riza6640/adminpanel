// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjZElLYP254PFJqgc3QvNMCGqqHVnDQNk",
  authDomain: "admin-rn-7884e.firebaseapp.com",
  databaseURL: "https://admin-rn-7884e-default-rtdb.firebaseio.com",
  projectId: "admin-rn-7884e",
  storageBucket: "admin-rn-7884e.firebasestorage.app",
  messagingSenderId: "52840804901",
  appId: "1:52840804901:web:dcf51ec494ce7f8cb245cc",
  measurementId: "G-SYTTJ7FVKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };