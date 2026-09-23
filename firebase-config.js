// ==============================================================
// CẤU HÌNH FIREBASE — ĐBP's Chess Club
// ==============================================================
// 1. Vào https://console.firebase.google.com -> chọn project của bạn
//    (hoặc tạo project mới nếu chưa có).
// 2. Vào Project Settings (biểu tượng bánh răng) -> mục "Your apps"
//    -> chọn app Web (biểu tượng </>) hoặc tạo mới.
// 3. Copy đoạn "firebaseConfig" mà Firebase cung cấp và dán đè vào
//    bên dưới, thay cho các giá trị "YOUR_..." mẫu.
// 4. Nhớ bật Firestore Database (Build > Firestore Database > Create
//    database) và bật Authentication > Sign-in method > Email/Password
//    (Build > Authentication > Sign-in method > Email/Password > Enable),
//    rồi tạo 1 tài khoản Admin trong tab "Users" của Authentication.
// ==============================================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Khởi tạo Firebase (dùng SDK "compat" để giữ nguyên cú pháp firebase.xxx()
// và không cần build tool / bundler).
firebase.initializeApp(firebaseConfig);

// Các biến dùng chung trong toàn bộ site — các file HTML khác gọi thẳng
// db / auth sau khi include file này.
const db = firebase.firestore();
const auth = firebase.auth();
