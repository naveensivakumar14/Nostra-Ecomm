
// currentSlideID = 1;

// sliderElement=document.getElementById("slider");
// totalSlides=sliderElement.childElementCount;

// function next(){
//     if(currentSlideID<totalSlides){
//         currentSlideID++;
//         showSlide();
//     }
// }

// function prev(){
//     if(currentSlideID>1){
//         currentSlideID--;
//         showSlide();
//     }
// }

// function showSlide(){
//     slides=document.getElementById("slides").getElementsByTagName("li");
//     for(let index=0;index<totalSlides;index++){
//         const ele=slides[index];
//         if(currentSlideID===index+1){
//             ele.classList.remove("hidden");
//         }
//         else{
//             ele.classList.add("hidden");
//         }
//     }
// }


//selecting sid Navbar, menuicon

var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
var closenav=document.getElementById("closenav");

menuicon.addEventListener("click",function(){
    sidenav.style.left=0;
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})


// product filter
var check=document.getElementsByName("check");
var collections=document.querySelector(".collection__s2");
var collectionItems=document.querySelectorAll(".collection_items");
// console.log(collectionItems);
//var productList=document.querySelectorAll("productImg")


//selecting all h3 elements from collection-s2
var h3List=collections.querySelectorAll("h3");
// console.log(h3List);

var products=[];

// for(i=0;i<check.length;i++){
//     check[i].addEventListener("click",function(){

        // if(event.target.checked){
        //     var selectedValue=event.target.value;
        //     console.log(selectedValue);
        //     products.push(selectedValue);
        //     console.log(products);
        // }
        // else{
        //     var index=products.indexOf(event.target.value);
        //     products.splice(index,1);
        //     console.log(products);

        // }
//     })

// }










//Summer checkbox

check[0].addEventListener("click",function(){

    var selectedItem=event.target.value;
    console.log(selectedItem);

    if(event.target.checked==1){
        if(event.target.value=="Summer"){
            collectionItems[0].style.display="block";
        }
    }
    else{
        collectionItems[1].style.display="none";
        collectionItems[2].style.display="none";
    }
})

//Party checkbox

// check[1].addEventListener("click",function(){

    var selectedItem=event.target.value;
    console.log(selectedItem);

    if(event.target.checked==1){
        if(event.target.value=="Party"){
            collectionItems[1].style.display="block";
        }
    }
    else{
        collectionItems[0].style.display="none";
        collectionItems[2].style.display="none";
    }

//Beach checkbox
check[2].addEventListener("click",function(){

    var selectedItem=event.target.value;
    console.log(selectedItem);

    if(event.target.checked==1){
        if(event.target.value=="Beach"){
            collectionItems[2].style.display="block";
        }
    }
    else{
        collectionItems[0].style.display="none";
        collectionItems[1].style.display="none";
    }
})












// for(i=0;i<check.length;i++){
//     check[i].addEventListener("click",function(){
//         //if activate only at the time of checkbox checked
//         if(event.target.checked){
//               console.log("checked");
//               products.push(event.target.value);
//               console.log(products);
//         }
//         else{
//               console.log("unchecked");
//               //find the index of the element
//               var index=products.indexOf(event.target.value);
//               products.splice(index,1);
//               console.log(products);
//             }
//     })
// }


