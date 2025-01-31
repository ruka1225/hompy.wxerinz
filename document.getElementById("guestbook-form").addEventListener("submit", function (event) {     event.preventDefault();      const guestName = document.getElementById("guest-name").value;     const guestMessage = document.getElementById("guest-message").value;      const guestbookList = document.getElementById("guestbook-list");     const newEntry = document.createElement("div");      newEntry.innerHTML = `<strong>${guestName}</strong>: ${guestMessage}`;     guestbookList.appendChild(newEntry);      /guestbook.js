document.getElementById("guestbook-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guest-name").value;
    const guestMessage = document.getElementById("guest-message").value;

    const guestbookList = document.getElementById("guestbook-list");
    const newEntry = document.createElement("div");

    newEntry.innerHTML = `<strong>${guestName}</strong>: ${guestMessage}`;
    guestbookList.appendChild(newEntry);

    // 폼 초기화
    document.getElementById("guest-name").value = "";
    document.getElementById("guest-message").value = "";
});
