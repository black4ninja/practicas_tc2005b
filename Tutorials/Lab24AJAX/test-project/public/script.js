const log = console.log

log("Loading");

window.addEventListener('load', function() {
    log('Window loaded');
    const myForm = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');
    const updateProductsButton = document.getElementById('updateProducts');
    const wrapper = document.getElementById('wrapper');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var result = generateProduct();
        addProduct(result.product);
        //loadProducts();
    });
    updateProductsButton.addEventListener('click', function(event) {
        //loadProducts()
    });
    /*setInterval(() =>{
        loadProducts()
    }, 5000);*/

    gridTable = new gridjs.Grid({
        columns: ["Id", "Name", "Price"],
        pagination: true,
        search: true,
        sort: true,
        server:{
            url: "/products",
            then: data => data.products
        }
    }).render(wrapper);
});

log("Loading 2");

class Product {
    constructor(id,name,price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

function generateProduct() {
    const idInput = myForm.elements['id'];
    const nameInput = myForm.elements['name'];
    const priceInput = myForm.elements['price'];

    const idValue = idInput.value;
    const nameValue = nameInput.value;
    const priceValue = priceInput.value;

    var newProduct = null
    var msg = "Created product"
    if(!idValue){
        msg = "Id is empty"
    }
    if(!nameValue){
        msg = "Name is empty"
    }
    if(!priceValue){
        msg = "Price is empty"
    }

    if(msg == "Created product"){
        newProduct = new Product(idValue,nameValue,priceValue);
    }

    return {product: newProduct, msg: msg}
}

async function addProduct(product){
    const url = '/add_product';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });

    if (response.ok) {
        const data = await response.json();
        log('Product added successfully:', data);
        // Clear the form or display a success message
    } else {
    alert('Error adding product: ' + response.statusText);
    }
}

async function loadProducts(){
    let response = await fetch('/products');

    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
      //log(json)
        const codeResult = document.getElementById('codeResult');
        codeResult.innerHTML = JSON.stringify(json.products);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

async function getProducts(){
    let response = await fetch('/products');

    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
        //log(json)
        return json.products;
    } else {
        return [];
    }
}