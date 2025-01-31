document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 관리자 계정 확인
    if (username === "rukawaii" && password === "rukawaii0323!") {
        alert("관리자로 로그인했습니다.");
        window.location.href = "home.html";
    } else {
        alert("계정 로그인했습니다.");
        window.location.href = "home.html";
    }
});
