// 관리자 아이디와 비밀번호 설정
const adminCredentials = { username: "rukawaii0323", password: "rukawaii0323!" };

// 로그인 처리
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const isAdmin =
    username === adminCredentials.username && password === adminCredentials.password;

  // 로그인 상태 저장
  sessionStorage.setItem("isLoggedIn", "true");
  sessionStorage.setItem("isAdmin", isAdmin.toString());

  // 홈 화면으로 이동
  alert(isAdmin ? "관리자로 로그인했습니다." : "일반 사용자로 로그인했습니다.");
  showSection("home");
}

// 섹션 전환 처리
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.add("hidden"));

  const targetSection = document.getElementById(`${sectionId}-section`);
  if (targetSection) {
    targetSection.classList.remove("hidden");

    // 관리자 권한 확인 후 수정 버튼 표시
    if (sectionId === "profile" || sectionId === "board") {
      const isAdmin = sessionStorage.getItem("isAdmin") === "true";
      const editButton = document.getElementById(`${sectionId}-edit-btn`);
      if (editButton) {
        editButton.style.display = isAdmin ? "block" : "none";
      }
    }
  }
}

// 방명록 작성 기능
function submitGuestbook() {
  const guestbookInput = document.getElementById("guestbook-input");
  const guestbookList = document.getElementById("guestbook-list");

  if (guestbookInput.value.trim() !== "") {
    const newEntry = document.createElement("li");
    newEntry.textContent = guestbookInput.value;
    guestbookList.appendChild(newEntry);
    guestbookInput.value = "";
  } else {
    alert("내용을 입력해주세요!");
  }
}

// 초기화 (로그인 화면으로 이동)
document.addEventListener("DOMContentLoaded", () => {
  sessionStorage.clear();
  showSection("login");
});

