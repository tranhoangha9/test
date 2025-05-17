let cartItems = [];
function addToCart(product) {
  let existingProduct = cartItems.find(item => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    product.quantity = 1;
    cartItems.push(product);
  }
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
  let cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";  
  let total = 0;
  cartItems.forEach((item, index) => {
    let itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
  
    let img = document.createElement("img");
    img.src = item.image;
    img.style.width = '200px'; 
    img.style.height = '120px'; 
    itemElement.appendChild(img);

    let name = document.createElement("span");
    name.textContent = item.name + (item.quantity > 1 ? ` x${item.quantity}` : "");
    itemElement.appendChild(name);

    let price = document.createElement("span");
    price.textContent = item.price.toLocaleString() + " VND";
    itemElement.appendChild(price);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";
    removeButton.onclick = () => removeFromCart(index);

    itemElement.appendChild(removeButton);
    cartItemsElement.appendChild(itemElement);
    total += item.price * item.quantity;
  });
  document.getElementById("cart-total").textContent = total.toLocaleString();
}


let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
function thanhtoan() {
  if (cartItems.length === 0) {
    document.querySelector(".Trangthaihang").textContent = "Bạn chưa chọn sản phẩm nào.";
    return;
  }
  // Lưu trữ sản phẩm trong orderHistory
  orderHistory = [...orderHistory, ...cartItems];
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  document.querySelector(".Trangthaihang").textContent = "Đơn hàng sẽ sớm được vận chuyển tới bạn.";
  
  cartItems = [];
  updateCart();
  updateOrderHistory();
}
function updateOrderHistory() {
  let orderHistoryElement = document.getElementById("order-history");
  orderHistoryElement.innerHTML = "";

  orderHistory.forEach((item, index) => {
    let itemElement = document.createElement("div");
    itemElement.classList.add("order-history-item");

    let img = document.createElement("img");
    img.src = item.image;
    img.style.width = '50px';
    img.style.height = '50px';
    itemElement.appendChild(img);

    let name = document.createElement("span");
    name.textContent = item.name + (item.quantity > 1 ? ` x${item.quantity}` : "");
    itemElement.appendChild(name);

    let price = document.createElement("span");
    price.textContent = item.price.toLocaleString() + " VND";
    itemElement.appendChild(price);

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Hủy";
    cancelButton.onclick = () => cancelOrder(index);
    itemElement.appendChild(cancelButton);

    orderHistoryElement.appendChild(itemElement);
  });
}
function cancelOrder(index) {
  orderHistory.splice(index, 1);
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  updateOrderHistory();
}