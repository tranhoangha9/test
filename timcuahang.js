function searchStore() {
    const selectElement = document.querySelector('select');
    const selectedCountry = selectElement.value;
    const resultElement = document.getElementById('searchResult');
    
    if (selectedCountry === 'Hà Nội') {
        resultElement.textContent = 'Có 20 cửa hàng ở Hà Nội';
    } else if (selectedCountry === 'Đà Nẵng') {
        resultElement.textContent = 'Có 10 cửa hàng ở Đà Nẵng';}
    else if (selectedCountry === 'Thái Nguyên') {
            resultElement.textContent = 'Có 100 cửa hàng ở Thái Nguyên';}
    else {
        resultElement.textContent = 'Không tìm thấy cửa hàng nào ở gần khu vực này';
    }
}
