const products = [
    { id: 1, name: "Black Printed Top", price: "$20.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/c_undershirt.png" },
    { id: 2, name: "Beige Top", price: "$25.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/c_polo-shirt.png"},
    { id: 3, name: "Blue Top", price: "$15.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/c_shirt-girl.png" },
    { id: 4, name: "Black Top", price: "$22.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/c_western-shirt.png" },
    { id: 5, name: "Jewellery", price: "$30.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/jewellery3.jpg"},
    { id: 6, name: "Formal Dress", price: "$40.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/dress4.jpg" },
    { id: 7, name: "White Shoes", price: "$35.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/shoes5.jpg" },
    { id: 8, name: "White Dress", price: "$45.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/dress2.jpg" },
    { id: 9, name: "White Heels", price: "$50.00", image: "C:/Users/vvais/OneDrive/Desktop/verma/images/shoes4.jpg" }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4 product-item';
    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(productCard);
});

const cart = [];

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        console.log(cart);
    }
});