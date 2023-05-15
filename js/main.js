//get all inputs to gather data
const productNameInp = document.getElementById("productNameInp"),
productPriceInp = document.getElementById("productPriceInp"),
productTaxInp = document.getElementById("productTaxInp"),
productAdsInp = document.getElementById("productAdsInp"),
productDiscouontInp = document.getElementById("productDiscouontInp"),
totalPrice = document.getElementById("totalPrice"),
productCountInp = document.getElementById("productCountInp"),
productCategoryInp = document.getElementById("productCategoryInp"),
productDescInp = document.getElementById("productDescInp"),
productSearchInp = document.getElementById("productSearchInp"),
btnAddProduct = document.getElementById("btnAddProduct"),//btn add product
btnDeleteProducts = document.getElementById("searchByTitle"),//btn search by title
tBody = document.getElementById("tBody");

let productList;


if(localStorage.getItem("allProducts") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("allProducts"));
    displayData(productList);
}

//will use other way to do these events (bad practs)
productPriceInp.onblur = setTotalPrice;
productPriceInp.onkeyup = setTotalPrice;
productTaxInp.onblur = setTotalPrice;
productTaxInp.onkeyup = setTotalPrice;
productAdsInp.onblur = setTotalPrice;
productAdsInp.onkeyup = setTotalPrice;
productDiscouontInp.onblur = setTotalPrice;
productDiscouontInp.onkeyup = setTotalPrice;
document.getElementById("containPrice").style.color = "red";

function setTotalPrice() {
    if (productPriceInp.value != "" && productTaxInp.value != "" && productAdsInp.value != "") {
        document.getElementById("containPrice").style.color = "green";
        totalPrice.innerHTML = 
        (+productPriceInp.value + +productAdsInp.value + +productTaxInp.value) - +productDiscouontInp.value;
    } else {
        document.getElementById("containPrice").style.color = "red";
    }
}

btnAddProduct.onclick = function addProduct() {

    if (productNameInp.value != '' && productPriceInp.value != '' && 
    productCategoryInp.value != '' && productDescInp.value != '') {
        getData();
    displayData(productList);
    clearForm();
    } else console.log("invalid");
    

}

function getData() {
    let product = {
        name: productNameInp.value,
        price: productPriceInp.value,
        tax: productTaxInp.value,
        ads: productAdsInp.value,
        discount: productDiscouontInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value,
        count: productCountInp.value
    }
    productList.push(product);
    localStorage.setItem("allProducts", JSON.stringify(productList));
    displayData(productList);
}

function displayData(ourProducts) {
    var cartoona = "";
    for (var i = 0; i < ourProducts.length; i++) {
        cartoona += `
                    <tr>
                        <td>${i}</td>            
                        <td>${ourProducts[i].name}</td>            
                        <td>${ourProducts[i].price}</td>            
                        <td>${ourProducts[i].tax}</td>            
                        <td>${ourProducts[i].ads}</td>            
                        <td>${ourProducts[i].discount}</td>            
                        <td>${ourProducts[i].category}</td>            
                        <td>${ourProducts[i].desc}</td>            
                        <td>${ourProducts[i].count}</td>            
                        <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
                        <td><button onclick="delProduct(${i})" class="btn btn-danger">Delete</button></td>
                    </tr>`;
    }
    tBody.innerHTML = cartoona;
}

function updateProduct(index) {
    productNameInp.value = productList[index].name;
    productPriceInp.value = productList[index].price;
    productCountInp.value = productList[index].count;
    productCategoryInp.value = productList[index].category;
    productDescInp.value = productList[index].desc;

    btnAddProduct.classList.toggle("d-none");
    document.getElementById("btnUpdateProduct").classList.toggle("d-none");
}

function clearForm() {
    productNameInp.value = "";
    productPriceInp.value = "";
    productAdsInp.value = "";
    productDiscouontInp.value = "";
    productTaxInp.value = "";
    productCategoryInp.value = "";
    productDescInp.value = "";
    productCountInp.value = "";
    totalPrice.value = "";
}

function delProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("allProducts", JSON.stringify(productList));
    displayData(productList);
};

function delAllProducts() {
    productList.splice(0);
    localStorage.removeItem("allProducts");
    displayData(productList);
}

deleteProducts.onclick = delAllProducts;

productSearchInp.onkeyup = function search() {
    let item = productSearchInp.value;
    let wantedProducts = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(item.toLowerCase()) ||
            productList[i].category.toLowerCase().includes(item.toLowerCase())) {
            wantedProducts.push(productList[i]);
        }
    }
    displayData(wantedProducts);
}

const box = document.getElementsByClassName("check")[0];


//valid for input value but need some skills in dom to do that soon...
/* productPriceInp.onkeyup = validInp(productPriceInp.value);
function validInp(inp) {
    inp.trim();
    if (inp.length < 1) {
        console.log("please don't stay the field empty");
    } else if (!Number(inp)){
        console.log("please enter numeric value[1-9]");
    } else if (inp.length > 10) {
        console.log("you must type numbers btween 1:10");
    }
    console.log(inp.length);
} */


function find_max(nums) {
 let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
 for (let num of nums) {
 if (num > max_num) {
 // (Fill in the missing line here)
 }
 }
 return max_num;
 }

 find_max([10,15,-15,0]);