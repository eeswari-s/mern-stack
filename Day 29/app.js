// Switch to Login Form
    function showLogin() {
      document.getElementById("registerForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    }

    // Switch to Register Form
    function showRegister() {
      document.getElementById("registerForm").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
    }

    // Register Function
    function registerUser() {
      const username = document.getElementById("regUser").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPass").value.trim();

      if (!username || !email || !password) {
        alert("Please fill all fields!");
        return;
      }

      // Save to localStorage
      const userData = { username, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful!");
      showLogin();
    }

    // Login Function
    function loginUser() {
      const email = document.getElementById("logEmail").value.trim();
      const password = document.getElementById("logPass").value.trim();

      const storedData = JSON.parse(localStorage.getItem("user"));

      if (!storedData) {
        alert("No user found! Please register first.");
        return;
      }

      if (email === storedData.email && password === storedData.password) {
        alert("Login successful!");
        // Redirect to another page
        window.location.href = "welcome.html"; // change to your page
      } else {
        alert("Invalid email or password!");
      }
    }