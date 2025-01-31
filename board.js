document.getElementById("board-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const boardList = document.getElementById("board-list");
    const newPost = document.createElement("div");

    newPost.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    boardList.appendChild(newPost);

    // 폼 초기화
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});
