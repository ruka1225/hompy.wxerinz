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

document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('role');

    if (role === 'admin') {
        document.getElementById('profile-edit').classList.remove('hidden');
        document.getElementById('board-input').classList.remove('hidden');
        document.getElementById('board-submit').classList.remove('hidden');
    }

    showSection('home');
});

function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`${section}-section`).classList.remove('hidden');
}

function changeProfileImage() {
    const fileInput = document.getElementById('profile-upload');
    const image = document.getElementById('profile-image');
    if (fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            image.src = reader.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function addGuestbookEntry() {
    const input = document.getElementById('guestbook-input');
    const list = document.getElementById('guestbook-entries');
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
}

function addBoardPost() {
    const input = document.getElementById('board-input');
    const list = document.getElementById('board-posts');
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
}



