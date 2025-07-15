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
  const form = document.getElementById("career-form");
  const submitBtn = document.getElementById("applicationBtn");
  const thankYou = document.getElementById("thankMsg");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      position: form.position.value,
      message: form.message.value,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "applications"), data);

      thankYou.classList.add("show");

      setTimeout(() => {
        thankYou.classList.remove("show");
      }, 4000);

      form.reset();
    } catch (err) {
      console.error("❌ Error submitting application:", err);
      alert("Something went wrong.");
    }

    submitBtn.textContent = "Submit Application";
    submitBtn.disabled = false;
  });
});

const headers = document.querySelectorAll(".header-text");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const allContents = document.querySelectorAll(".content");
    const allIcons = document.querySelectorAll(".header-text .icon");
    const currentContent = header.nextElementSibling;
    const currentIcon = header.querySelector(".icon");

    const isOpen = currentContent.classList.contains("open");

    // Close all
    allContents.forEach((c) => {
      c.classList.remove("open");
      c.style.maxHeight = null;
      c.style.paddingTop = 0;
      c.style.paddingBottom = 0;
    });
    allIcons.forEach((i) => (i.textContent = "+"));

    // If not open, open it
    if (!isOpen) {
      currentContent.classList.add("open");
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      currentContent.style.paddingTop = "15px";
      currentContent.style.paddingBottom = "15px";
      currentIcon.textContent = "−";
    }
  });
});

const fadeElements = document.querySelectorAll(".fade-in");

const onScroll = () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);

const faders = document.querySelectorAll(".fade-left, .fade-right");

const Scroll = () => {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", Scroll);
window.addEventListener("load", Scroll);
