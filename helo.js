class ChaoNguoiDung extends HTMLElement {
  connectedCallback() {
    const ten = "KingAhf"; // có thể sửa thành input sau này
    this.innerHTML = `<h1 style="color:rgb(31, 107, 239);">Xin chào, tôi là ${ten} ! </h1>`;
  }
}

customElements.define("he-loo", ChaoNguoiDung);
