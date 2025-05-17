document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('cfpass').value;
    // Kiểm tra dữ liệu
 /*if (email.trim() === '') {
  showErrorMessage('Vui lòng nhập email.');
  return;
}
if (password.trim() === '') {
  showErrorMessage('Vui lòng nhập mật khẩu.');
  return;
}
  */
if (email === 'tranhoangha@gmail.com' || email === 'nguyenquangtung@gmail.com' || email === 'daophucvietanh@gmail.com') {
  showErrorMessage('Tài khoản đã tồn tại');
  return;
}
if (password.length < 3) {
  showErrorMessage('Mật khẩu phải có ít nhất 3 ký tự.');
  return;
}
if (password !== confirmPassword) {
  showErrorMessage('Mật khẩu không khớp.');
  return;
}
 showSuccessMessage('Đăng ký thành công!');
  document.getElementById('contactForm').reset();
  
});
function showErrorMessage(message) {
    document.getElementById('response').innerHTML = '<p style="color: red;">' + message + '</p>';
  }
  function showSuccessMessage(message) {
    document.getElementById('response').innerHTML = '<p style="color: blue;">' + message + '</p>';
  }