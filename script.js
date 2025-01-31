document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "rukawaii0323!") {
                sessionStorage.setItem("user", "admin");
                window.location.href = "home.html";
            } else {
                sessionStorage.setItem("user", "guest");
                window.location.href = "home.html";
            }
        });
    }

    // 방명록 작성 기능
    const guestbookForm = document.querySelector("#guestbookForm");
    const guestbookList = document.querySelector("#guestbookList");

    if (guestbookForm) {
        guestbookForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = document.querySelector("#guestbookMessage").value;
            if (message.trim() === "") return;

            const li = document.createElement("li");
            li.textContent = message;

            // 관리자라면 삭제 버튼 추가
            if (sessionStorage.getItem("user") === "admin") {
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "삭제";
                deleteBtn.style.marginLeft = "10px";
                deleteBtn.onclick = function () {
                    li.remove();
                };
                li.appendChild(deleteBtn);
            }

            guestbookList.appendChild(li);
            document.querySelector("#guestbookMessage").value = "";
        });
    }
});
