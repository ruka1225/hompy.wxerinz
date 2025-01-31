// 로그인 처리
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        localStorage.setItem('role', 'admin');
        window.location.href = 'home.html';
    } else if (username === 'user' && password === 'user123') {
        localStorage.setItem('role', 'user');
        window.location.href = 'home.html';
    } else {
        alert('아이디 또는 비밀번호를 확인하세요.');
    }
});

// 홈 화면 초기화
document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
        document.getElementById('profile-edit').classList.remove('hidden');
        document.getElementById('board-input').classList.remove('hidden');
        document.getElementById('board-submit').classList.remove('hidden');
    }
    showSection('home');
});

// 섹션 표시
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}

// 프로필 사진 변경
function changeProfileImage() {
    const fileInput = document.getElementById('profile-upload');
    const profileImage = document.getElementById('profile-image');
    const reader = new FileReader();

    reader.onload = () => {
        profileImage.src = reader.result;
        localStorage.setItem('profileImage', reader.result);
    };

    if (fileInput.files[0]) reader.readAsDataURL(fileInput.files[0]);
}

// 방명록 추가
function addGuestbook() {
    const input = document.getElementById('guestbook-input').value;
    const list = document.getElementById('guestbook-list');

    if (input.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input;
        list.appendChild(li);
        document.getElementById('guestbook-input').value = '';
    }
}

// 게시글 추가
function addBoardPost() {
    const input = document.getElementById('board-input').value;
    const list = document.getElementById('board-list');

    if (input.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input;
        list.appendChild(li);
        document.getElementById('board-input').value = '';
    }
}


