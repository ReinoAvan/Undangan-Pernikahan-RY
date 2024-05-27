import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);
