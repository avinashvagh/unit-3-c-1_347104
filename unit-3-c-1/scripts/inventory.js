
let storeData = JSON.parse(localStorage.getItem("products")) || [];

storeData.map(function(elem, i){
    var div =document.createElement("div");
    let img = document.createElement("img");
    img.src= elem.image;

    let type = document.createElement("p");
    type.innerText=elem.type;

    let desc = document.createElement("p");
    desc.innerText=elem.desc;

    let price = document.createElement("p");
    price.innerText=elem.price;


    let remove = document.createElement("button");
    remove.innerText="Remove";

    remove.setAttribute("id","remove_product");
     remove.addEventListener("click",function(){
         removeProducts(elem,i)
         location.reload();
     })

     div.append(img,type,desc,price,remove);
     document.querySelector("#all_products").append(div);
  

});

function removeProducts(elem,i){
    console.log(i);
    storeData.splice(i,1);

    localStorage.setItem("products",JSON.stringify(storeData));

}