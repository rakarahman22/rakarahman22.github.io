function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'RAKA.UTB' && password === 'menyalaUTB') {
        alert('Login Berhasil!');
        window.location.href = 'menu.html';
    } else {
        alert('Username atau Password salah!');
    }
}
