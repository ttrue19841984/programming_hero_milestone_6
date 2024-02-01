const addProduct = () =>{
     const productField = document.getElementById('product-name');
     const quentityField = document.getElementById("product-quantity");
     const product = productField.value;
     const quentity = quentityField.value;
     productField.value = '';
     quentityField.value = '';


     console.log(product, quentity);
     displayProduct(product, quentity);
     saveProductToLocalStorage(product, quentity);
}

const displayProduct = (product, quentity) =>{
     const ul = document.getElementById('product-container');
     const li = document.createElement('li');
     li.innerText = `${product} ${quentity}`;
     ul.appendChild(li)
}

const getStoredShoppingCart = () =>{
     let cart = {};
     const storedCart = localStorage.getItem('cart')
     if(storedCart){
          cart = JSON.parse(storedCart)
     }
     return cart;
}
const saveProductToLocalStorage = (product, quentity) =>{
     const cart = getStoredShoppingCart();
     cart[product] = quentity;
     // console.log(cart);
     const cartStringified = JSON.stringify(cart);  
     // console.log(cartStringified)
     localStorage.setItem('cart', cartStringified)

}
const displayProductsFromLocalStorage = () =>{
     const savedCart = getStoredShoppingCart();
     console.log(savedCart)
     for(const product in savedCart){
          const quantity = savedCart[product]
          console.log(product, quantity);
          displayProduct(product, quantity)
     }
}
displayProductsFromLocalStorage()