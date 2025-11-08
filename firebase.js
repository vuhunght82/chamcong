
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

<script>
  // Cấu hình Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAb5AZOBvEVY3a_9ioEKTW-wuVMXdnRZGQ",
    authDomain: "sellglass-3ebe9.firebaseapp.com",
    databaseURL: "https://sellglass-3ebe9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sellglass-3ebe9",
    storageBucket: "sellglass-3ebe9.appspot.com",
    messagingSenderId: "513741829035",
    appId: "1:513741829035:web:1b2c59dcf1a0be329358ee"
  };

  // Chỉ khởi tạo 1 lần
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Khởi tạo database và auth
  const db = firebase.database();
  const auth = firebase.auth();

  // Có thể export ra window để các file JS khác dùng
  window.db = db;
  window.auth = auth;
</script>

