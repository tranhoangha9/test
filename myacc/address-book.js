// address-book.js
// Hiển thị modal thêm/sửa địa chỉ, tự động fill thông tin khi sửa

document.addEventListener('DOMContentLoaded', function() {
    const addressModal = document.getElementById('addressModal');
    const addressModalLabel = document.getElementById('addressModalLabel');
    const addressForm = document.getElementById('addressForm');
    const inputName = document.getElementById('inputName');
    const inputPhone = document.getElementById('inputPhone');
    const inputAddress = document.getElementById('inputAddress');
    const defaultAddress = document.getElementById('defaultAddress');
    const addAddressBtn = document.getElementById('addAddressBtn');
    let isEdit = false;

    // Khi bấm Thêm địa chỉ mới
    addAddressBtn.addEventListener('click', function() {
        isEdit = false;
        addressModalLabel.textContent = 'Thêm địa chỉ mới';
        addressForm.reset();
        defaultAddress.checked = false;
    });

    // Khi bấm Sửa địa chỉ
    document.querySelectorAll('.edit-address-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            isEdit = true;
            addressModalLabel.textContent = 'Sửa địa chỉ';
            inputName.value = btn.getAttribute('data-name') || '';
            inputPhone.value = btn.getAttribute('data-phone') || '';
            inputAddress.value = btn.getAttribute('data-address') || '';
            defaultAddress.checked = btn.getAttribute('data-default') === 'true';
        });
    });

    // Submit form (demo, không lưu thực tế)
    addressForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý lưu địa chỉ ở đây
        // ...
        // Đóng modal (chỉ dùng khi submit, không can thiệp khi mở)
        const modal = bootstrap.Modal.getOrCreateInstance(addressModal);
        modal.hide();
    });
});
