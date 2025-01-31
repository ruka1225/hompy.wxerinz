body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #bde3fa, #ffffff);
}

.hidden {
    display: none;
}

.login-container,
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
    width: 100%;
}

label {
    font-size: 14px;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}

.menu {
    background-color: #4CAF50;
    padding: 10px;
    width: 100%;
    text-align: center;
}

.menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

.menu li {
    margin: 0 10px;
}

.menu a {
    color: white;
    text-decoration: none;
    font-size: 14px;
}

.menu a:hover {
    text-decoration: underline;
}

textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
