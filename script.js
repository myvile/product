const addBtn=document.querySelectorAll(".add-button");
const funBtn=document.querySelectorAll(".function-area");
const products=document.querySelector("#products");
const data=[{
    title:"Chicken Rice",
    image:"./img/chicken-biriyani.jpg",
    price:"20",
    included:"4 Chicken pices, Salads, Chutney",
    discount:"50",
    delivery_time:"40",
    reviews:300,
    review_points:900
},{
    title:"Chicken Biryani",
    image:"./img/chicken-biriyani.jpg",
    price:"40",
    included:"2 Chicken pices, Salads",
    discount:"20",
    delivery_time:"30",
    reviews:250,
    review_points:900 
}];
let cart=[];

loadProducts=(data)=>{
    let cont=0;
    data.forEach(element => {
        let thisHtml=document.createElement('div');
        thisHtml.classList.add('card');
        let thisList="";
        let review=parseInt(element.review_points)/parseInt(element.reviews);
        let list=element.included.split(",");
        list.forEach(e => {
            thisList +=`<li>${e}</li>`;
        });
        thisHtml.innerHTML= `<img class="main" src="${element.image}"><div class="area">
    <h2 class="title">${element.title}i</h2>
    <div class="price">₹<span>${element.price}</span></div>
    <ul>
        ${thisList}
    </ul>
    <div class="delivery-in"><img src="./img/delivery.png"/> ${element.delivery_time} mins</div>
    <div class="discount"><img src="./img/discount.png"/> ${element.discount}%</div>
    <div class="review"><img src="./img/star.png"/>${review}</div>
    <div class="button-area">
        <div class="add-button" id="add${cont}" onClick="addClicked(${cont})"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/add--v1.png"/> <h3>ADD</h3></div>
        <div class="function-area" id="fun${cont}" ><div class="add-item-btn" onClick="plusClicked(${cont})"><img src="./img/plus.png" alt="plus"></div> <div class="items-in-cart">1</div><div class="remove-item-btn"><img src="./img/minus.png" alt="minus"></div> </div>
    </div>
</div>`;

products.appendChild(thisHtml);
cart[cont]=0;
cont++;
    });
    
}
loadProducts(data);

function addClicked(id){
    const add=document.getElementById(`add${id}`);
    const fun=document.getElementById(`fun${id}`);
    add.style.display="none";
    fun.style.display="flex";
}

function plusClicked(id){
    const add=document.getElementById(`add${id}`);
    const fun=document.getElementById(`fun${id}`);
    add.style.display="flex";
    fun.style.display="none";
}



