// 사용자 정보
let isAdmin = false;

// 로그인 기능
function login(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // 관리자 계정
    const adminId = 'ruka0323';
    const adminPassword = 'rukawaii0323!';

    if (userId === adminId && password === adminPassword) {
        alert('관리자로 로그인했습니다!');
        isAdmin = true;
    } else {
        alert('오늘도 방가방가><!');
        isAdmin = false;
    }

    showHome();
}

// 홈 화면 표시
function showHome() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('home-container').classList.remove('hidden');

    if (isAdmin) {
        document.getElementById('post-content').disabled = false;
        document.getElementById('post-button').disabled = false;
        document.getElementById('profile-edit').classList.remove('hidden');
    } else {
        document.getElementById('post-content').disabled = true;
        document.getElementById('post-button').disabled = true;
        document.getElementById('profile-edit').classList.add('hidden');
    }
}

// 메뉴 섹션 전환
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    document.getElementById(sectionId).classList.remove('hidden');
}

// 게시글 저장 및 표시
function submitPost() {
    const content = document.getElementById('post-content').value;
    const posts = document.getElementById('posts');

    if (content.trim()) {
        const post = document.createElement('p');
        post.textContent = content;

        posts.appendChild(post);
        savePosts();
        document.getElementById('post-content').value = '';
    } else {
        alert('게시글을 입력해주세요!');
    }
}

// 방명록 저장 및 표시
function submitGuestbook() {
    const entry = document.getElementById('guestbook-entry').value;
    const messages = document.getElementById('guestbook-messages');

    if (entry.trim()) {
        const message = document.createElement('p');
        message.textContent = entry;
        messages.appendChild(message);
        document.getElementById('guestbook-entry').value = '';
    } else {
        alert('방명록을 입력해주세요!');
    }
}

// 게시글 저장 (localStorage)
function savePosts() {
    const posts = document.querySelectorAll('#posts p');
    const postArray = Array.from(posts).map(post => post.textContent);
    localStorage.setItem('posts', JSON.stringify(postArray));
}

// 게시글 불러오기 (localStorage)
function loadPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const posts = document.getElementById('posts');
    posts.innerHTML = '';

    savedPosts.forEach(content => {
        const post = document.createElement('p');
        post.textContent = content;
        posts.appendChild(post);
    });
}

// 프로필 편집 (관리자 전용)
function editProfile() {
    const profileName = document.getElementById('profile-name').value;

    if (profileName.trim()) {
        document.getElementById('welcome-message').textContent = `환영합니다, ${profileName}!`;
        alert('프로필이 저장되었습니다.');
    } else {
        alert('프로필 이름을 입력해주세요.');
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', loadPosts);

