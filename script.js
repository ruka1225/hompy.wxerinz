document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 입력하세요.');
        return;
    }

    if (username === 'rukawaii0323') {
        localStorage.setItem('role', 'rukawaii0323'); // 관리자 권한 저장
    } else {
        localStorage.setItem('role', 'user'); // 일반 사용자 권한 저장
    }

    window.location.href = 'home.html'; // 홈 화면으로 이동
});


