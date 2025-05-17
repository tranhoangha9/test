const accounts = [
    { email: 'tranhoangha@gmail.com', password: '123' },
    { email: 'nguyenquangtung@gmail.com', password: '123' },
    { email: 'daophucvietanh@gmail.com', password: '123' }
];
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const existingAccount = accounts.find(acc => acc.email === email);
    if (existingAccount) {
        if (existingAccount.password === password) {
            showResponse('Đăng nhập thành công!');
            window.location.href= 'ananas.html';
        } else {
            showResponse('Mật khẩu không chính xác.');
        }
    } else {
        showResponse('Email không tồn tại.');
    }
});
function showResponse(message) {
    document.getElementById('response').textContent = message;
}
