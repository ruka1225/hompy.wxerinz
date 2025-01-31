function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "rukawaii0323" && password === "rukawaii0323!") {
    alert("관리자로 로그인되었습니다!");
    window.location.href = "home.html";
  } else if (username && password) {
    alert(`${username}님 환영합니다!`);
    window.location.href = "home.html";
  } else {
    alert("아이디와 비밀번호를 입력해주세요.");
  }
}
