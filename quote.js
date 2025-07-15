// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRN_zpMzqLqG_C8tJpX9sF30_al-Ph3Zc",
  authDomain: "freightflow-18693.firebaseapp.com",
  projectId: "freightflow-18693",
  storageBucket: "freightflow-18693.firebasestorage.app",
  messagingSenderId: "184588150823",
  appId: "1:184588150823:web:824772c8f17146e1bf8602",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");
  const thankYouMessage = document.querySelector(".thanks");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show "Submitting..."
    submitBtn.textContent = "Requesting...";
    submitBtn.disabled = true;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      details: form.details.value,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "quotes"), data);

      thankYouMessage.classList.add("show");

      setTimeout(() => {
        thankYouMessage.classList.remove("show");
      }, 4000);

      form.reset();
    } catch (err) {
      console.error("Error submitting quote:", err);
      alert("❌ Something went wrong.");
    }

    // Reset button after submission
    submitBtn.textContent = "Request A Quote";
    submitBtn.disabled = false;
  });
});
