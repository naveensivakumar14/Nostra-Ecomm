//popup section

var popup=document.getElementById("popup");
var closebtn=document.getElementById("closebtn");

closebtn.addEventListener("click",function(){
    popup.style.display="none";
})


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

//selecting all h3 elements from collection-s2
var h3List=collections.querySelectorAll("h3");
// console.log(h3List);

var products=[];

//Summer checkbox
check[0].addEventListener("click",function(){
    var selectedItem=event.target.value;
    console.log(selectedItem);

    if(event.target.checked){
        
        if(selectedItem=="Summer"){
            collectionItems[0].style.display="block";
            collectionItems[1].style.display="none";
            collectionItems[2].style.display="block";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="none";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="block";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="none";
        }
    }
    else{
            collectionItems[0].style.display="block";
            collectionItems[1].style.display="block";
            collectionItems[2].style.display="block";
            collectionItems[3].style.display="block";
            collectionItems[4].style.display="block";
            collectionItems[5].style.display="block";
            collectionItems[6].style.display="block";
            collectionItems[7].style.display="block";
            collectionItems[8].style.display="block";
    }
})
//Party checkbox
check[1].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="Party"){
            collectionItems[0].style.display="none";
            collectionItems[1].style.display="block";
            collectionItems[2].style.display="none";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="block";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="none";
            collectionItems[7].style.display="block";
            collectionItems[8].style.display="block";
        }
    }
    else{
            collectionItems[0].style.display="block";
            collectionItems[1].style.display="block";
            collectionItems[2].style.display="block";
            collectionItems[3].style.display="block";
            collectionItems[4].style.display="block";
            collectionItems[5].style.display="block";
            collectionItems[6].style.display="block";
            collectionItems[7].style.display="block";
            collectionItems[8].style.display="block";
    }
})
//Beach checkbox
check[2].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="Beach"){
            collectionItems[0].style.display="none";
            collectionItems[1].style.display="none";
            collectionItems[2].style.display="block";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="none";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="none";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="none";
            collectionItems[9].style.display="block";
        }
    }
    else{
        collectionItems[0].style.display="block";
        collectionItems[1].style.display="block";
        collectionItems[2].style.display="block";
        collectionItems[3].style.display="block";
        collectionItems[4].style.display="block";
        collectionItems[5].style.display="block";
        collectionItems[6].style.display="block";
        collectionItems[7].style.display="block";
        collectionItems[8].style.display="block";
    }
})
//Red check box
check[3].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="Red"){
            collectionItems[0].style.display="none";
            collectionItems[1].style.display="block";
            collectionItems[2].style.display="none";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="block";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="none";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="block";
        }
    }
    else{
        collectionItems[0].style.display="block";
        collectionItems[1].style.display="block";
        collectionItems[2].style.display="block";
        collectionItems[3].style.display="block";
        collectionItems[4].style.display="block";
        collectionItems[5].style.display="block";
        collectionItems[6].style.display="block";
        collectionItems[7].style.display="block";
        collectionItems[8].style.display="block";
    }
})
//Blue check box
check[4].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="Blue"){
            collectionItems[0].style.display="none";
            collectionItems[1].style.display="none";
            collectionItems[2].style.display="none";
            collectionItems[3].style.display="block";
            collectionItems[4].style.display="none";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="none";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="block";
            collectionItems[9].style.display="block";
        }
    }
    else{
        collectionItems[0].style.display="block";
        collectionItems[1].style.display="block";
        collectionItems[2].style.display="block";
        collectionItems[3].style.display="block";
        collectionItems[4].style.display="block";
        collectionItems[5].style.display="block";
        collectionItems[6].style.display="block";
        collectionItems[7].style.display="block";
        collectionItems[8].style.display="block";
    }
})
//Green check box
check[5].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="Green"){
            collectionItems[0].style.display="block";
            collectionItems[1].style.display="block";
            collectionItems[2].style.display="none";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="none";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="block";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="none";
        }
    }
    else{
        collectionItems[0].style.display="block";
        collectionItems[1].style.display="block";
        collectionItems[2].style.display="block";
        collectionItems[3].style.display="block";
        collectionItems[4].style.display="block";
        collectionItems[5].style.display="block";
        collectionItems[6].style.display="block";
        collectionItems[7].style.display="block";
        collectionItems[8].style.display="block";
    }
})

//White check box
check[6].addEventListener("click",function(){
    if(event.target.checked){
        if(event.target.value=="White"){
            collectionItems[0].style.display="none";
            collectionItems[1].style.display="none";
            collectionItems[2].style.display="block";
            collectionItems[3].style.display="none";
            collectionItems[4].style.display="none";
            collectionItems[5].style.display="none";
            collectionItems[6].style.display="block";
            collectionItems[7].style.display="none";
            collectionItems[8].style.display="none";
        }
    }
    else{
        collectionItems[0].style.display="block";
        collectionItems[1].style.display="block";
        collectionItems[2].style.display="block";
        collectionItems[3].style.display="block";
        collectionItems[4].style.display="block";
        collectionItems[5].style.display="block";
        collectionItems[6].style.display="block";
        collectionItems[7].style.display="block";
        collectionItems[8].style.display="block";
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


