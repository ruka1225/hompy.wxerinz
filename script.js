function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 관리자 계정 확인
  if (username === "rukawaii0323" && password === "rukawaii0323!") {
    alert("관리자 로그인 성공!");
    window.location.href = "home.html";
    sessionStorage.setItem("role", "admin"); // 관리자 역할 저장
  } 
  // 일반 사용자 로그인
  else if (username && password) {
    alert("wendy wemdy 로그인 성공!");
    window.location.href = "home.html";
    sessionStorage.setItem("role", "user"); // 일반 사용자 역할 저장
  } 
  // 로그인 실패
  else {
    alert("아이디와 비밀번호를 입력하세요.");
  }
}
function navigate(page) {
  window.location.href = page; // 페이지 이동
}
