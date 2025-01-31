// 로그인 기능
function login(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // 관리자 계정
    const adminId = 'xowoxvo';
    const adminPassword = 'xowoxvo0323';

    if (userId === adminId && password === adminPassword) {
        alert('관리자로 로그인했습니다!');
        showHome(true);
    } else {
        alert('오늘도 방가방가>.<');
        showHome(false);
    }
}

// 홈 화면 표시
function showHome(isAdmin) {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('home-container').classList.remove('hidden');

    if (isAdmin) {
        document.getElementById('admin-controls').classList.remove('hidden');
    }
}

// 메뉴 섹션 전환
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    document.getElementById(sectionId).classList.remove('hidden');
}

// 게시글 작성 기능
function submitPost() {
    const content = document.getElementById('post-content').value;
    const posts = document.getElementById('posts');

    if (content.trim()) {
        const post = document.createElement('p');
        post.textContent = content;
        posts.appendChild(post);
        document.getElementById('post-content').value = '';
    } else {
        alert('게시글을 입력해주세요!');
    }
}
