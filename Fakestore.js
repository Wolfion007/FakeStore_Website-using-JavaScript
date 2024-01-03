let leftContainer=document.getElementById("leftcontainer");
let rightContainer=document.getElementById("rightcontainer");
let productList=document.getElementById("productList");


let fetchstore=async()=>{
  let res =await fetch("https://fakestoreapi.com/products");
  let data=await res.json();
  productlistdata(data);

}
fetchstore();

let productlistdata=(data)=>{
    console.log(data);
    data.forEach((ele,index)=>{
      let div=document.createElement("div");
      div.className="card";
      productlist.append(div);
     
      div.innerHTML=`<img src=${ele.image} alt=${ele.title} class="image">
       <p class="title" class="title">${ele.title}</p>`

       //as click event is finite and iteratable enter loop
                     
       div.addEventListener("click",()=>{
        leftSideData(ele,index);
        rightSideData(ele,index);
       })



    });
};


let leftSideData=(ele,index)=>{
    leftContainer.innerHTML=`<img src=${ele.image} alt=${ele.title} class="leftSideimage">
    <p  class="leftSidetitle">${ele.title}</p>`
 console.log(ele,index)
};

let rightSideData=(ele,index)=>{
    rightContainer.innerHTML=`<h1 class="labels">${ele.title}</h1><br>
    <span class="labels>Product ID</span><span class="details>${ele.id}</span><br>
    <span class="labels>Product ID</span><span class="details>${ele.category}</span><br>
    <span class="labels>Product ID</span><span class="details>${ele.description}</span><br>
    <span class="labels>Product ID</span><span class="details>${ele.price}</span><br>
    <span class="labels>Product ID</span><span class="details>${ele.rating.rate}</span><br>
    <span class="labels>Product ID</span><span class="details>${ele.rating.count}</span><br>`
console.log(ele,index)
}
