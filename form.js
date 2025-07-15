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
  const form = document.getElementById("inputs");
  const submitBtn = document.getElementById("submit-btn");
  const thankYou = document.getElementById("thanksMsg");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
      timestamp: new Date(),
    };

    try {
      console.log("Submitting:", data);
      await addDoc(collection(db, "userQuestions"), data);

      thankYou.classList.add("show");

      setTimeout(() => {
        thankYou.classList.remove("show");
      }, 4000);

      form.reset();
    } catch (err) {
      console.error("❌ Error Sending Message:", err);
      alert("Something went wrong.");
    }

    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
  });
});
