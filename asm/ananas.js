


/* var obj_product = [];
  var productData = [
    {id_product:'1',name_product:"sanpham1",soluong:'10',id_item:"1",src:"img/anhsanpham1.jpg"},
    {id_product:'1',name_product:"sanpham1",soluong:'10',id_item:"1",src:"img/anhsanpham2.jpg"},
    {id_product:'1',name_product:"sanpham1",soluong:'10',id_item:"1",src:"img/anhsanpham3.jpg"},
    {id_product:'1',name_product:"sanpham1",soluong:'10',id_item:"1",src:"img/anhsanpham4.jpg"}
  ];
  
  for (var i = 0; i < productData.length; i++) {
    obj_product.push(productData[i]);
  }
  
  var productContainer = document.getElementById('product-container');
  var showProductsButton = document.getElementById('show-products-button');
  
  showProductsButton.addEventListener('click', function() {
    productContainer.innerHTML = '';
  
    obj_product.forEach(function(product) {
      var productItem = document.createElement('div');
      productItem.classList.add('product-item');
  
      var productImage = document.createElement('img');
      productImage.src = product.src || 'default-image.jpg';
      productImage.alt = product.name_product;
      productItem.appendChild(productImage);
  
      var productName = document.createElement('h3');
      productName.textContent = product.name_product;
      productItem.appendChild(productName);
  
      var productQuantity = document.createElement('p');
      productQuantity.textContent = 'Số lượng: ' + product.soluong;
      productItem.appendChild(productQuantity);
  
      productContainer.appendChild(productItem);
    });
  }); */

  var img=[];
function thayDoiAnh(...urls) {
  const productContainer = document.querySelector('.product-container');
  if (urls.length === 0 || (urls.length === 1 && !urls[0])) {
      productContainer.innerHTML = `<p>Không có sản phẩm nào hiện có tại mục này.</p>`;
  } else {
      productContainer.innerHTML = urls.map(url => `
          <div class="product-item">
              <img src="${url}" alt="Sản phẩm">
          </div>
      `).join('');
  }
}
function hienTatCa() {
  const allImages = [
      'img/anhgiay1.jpg', 'img/anhgiay2.jpg', 'img/anhgiay3.jpg',
      'img/aonam1.jpg', 'img/aonam2.jpg', 'img/aonam3.jpg',
      'img/anhtat1.jpg', 'img/anhtat2.jpg', 'img/anhtat3.jpg',
      'img/aonu1.jpg', 'img/aonu2.jpg', 'img/aonu3.jpg',
      'img/aoxin2.jpg', 'img/aoxin3.jpg'
  ];
  thayDoiAnh(...allImages);
}
