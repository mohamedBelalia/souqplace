let transformImg = document.querySelector(".content .img-side")
let x = 0 ;
setInterval(()=>{
    transformImg.style.transform = `skewX(${x}deg)`;
    if(x<=-30){
        x=25
    }
    x--
},100)


let imageImg = ["./images/adidas1.jpg","./images/adidas2.jpg","./images/adidas3.jpg","./images/adidas5.jpg","./images/nike.png"]
let currentImg = document.getElementsByClassName("header-img")[0]
let ind = 1
setInterval(()=>{
    currentImg.src = imageImg[ind]
    ind++
    if(ind>=imageImg.length){
        ind = 0
    }

},4000)


// -------------------------------------------------------------------------------------



const wrapper = document.querySelector(".slide-container");
const carousel = document.querySelector(".child-slide");
const firstCardWidth = carousel.querySelector(".card12").offsetWidth;
const arrowBtns = document.querySelectorAll(".slide-container .icon");

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

carousel.scrollLeft = carousel.offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// -----------------------------------------------------------------------------------------------------

let imagesBox = document.querySelectorAll(".card12")
let heartBtns = document.querySelectorAll(".heart-inside")


imagesBox.forEach(function(box){
    let hidenBox = box.getElementsByClassName("hide-content")[0]
    box.addEventListener("mouseover",function(){
       hidenBox.style.height = "60%"
    })
    box.addEventListener("mouseleave",function(){
        hidenBox.style.height = "0%"
     })
})

let clickes = 0
heartBtns.forEach(function(btn){
    let clicked = false
    btn.addEventListener("click",function(){
        if(!clicked){
            btn.style.backgroundColor = "rgba(232, 84, 84, 0.791)"
            btn.style.color = "white"
            clicked = true
            
        }
        else{
            btn.style.backgroundColor = "rgb(255, 226, 226)"
            btn.style.color = "#d44740"
            clicked = false
        }

    })
})


// -----------------------------------------------------------------------------------------------------


let companiesName = document.querySelectorAll(".company-shoes-name")
let theName = "Puma"



let clicked = false
let productsLoop = document.getElementById("products-box")

companiesName.forEach(function(cmp){

    cmp.addEventListener("click",function(){

      for(let i=0 ; i< companiesName.length ; i++){
        if(companiesName[i].classList.contains("active-cmp")){
            companiesName[i].classList.remove("active-cmp")
        }
      }
      cmp.classList.add("active-cmp")
        
        theName = cmp.innerHTML

        // ---------------

        let http = new XMLHttpRequest()

        http.open('get','data.json',true)
        
        http.send()


        
http.onload = function(){

    if(this.readyState == 4 && this.status == 200){

        let product = JSON.parse(this.responseText)

        let output = ""

        for(let item of product){

          if(theName == item.title){ 

            output += `
            <div class="col-lg-3 col-md-6 pb-2 pt-2 company-box">
          <div class="img">
            <img src=${item.image} class="img-fluid">
          </div>
          <div class="text mt-2">
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>${item.title}</p>
            <h5><span><del>${item.detPrice}</del></span> <span>${item.curPrice}</span></h5>
          </div>
        </div>
            
            `
        }
    }

        // let products = document.getElementById("products-box")

        productsLoop.innerHTML = output
    }

}
   
    })
})








// -----------------------------------------------------------------------------------------------------


let timer = document.querySelectorAll(".timer")
let timer2 = document.querySelectorAll(".timer2")


timeWait(timer)
timeWait(timer2)

function timeWait (timerNum){
    let days = timerNum[0]
let hours = timerNum[1]
let minute = timerNum[2]

days.innerHTML = 3
hours.innerHTML = 12
minute.innerHTML = 35

let d = 3
let h = 12
let m = 25
 

setInterval(()=>{
    m = m-1
    if(m==0){
        m=60
        h = h-1
    }

    if(h==0){
        h=24
        d = d-1
    }

    days.innerHTML = d
    hours.innerHTML = h
    minute.innerHTML = m

},60000)
}




// ------------------------------------------------------------


const people = document.querySelector(".people")

let btns = document.querySelectorAll(".direction")

let cardWidth = people.querySelector(".card1").offsetWidth


btns.forEach(function(btn){
    btn.addEventListener("click",() =>{
        people.scrollLeft += btn.id ==="left" ? -cardWidth : cardWidth
    })
})

let isDraged = false
let stratX , startScrollingLeft
let timeOut

let dragStartNum2 = (e) =>{
    isDraged = true
    people.classList.add("dragged")

    stratX = e.pageX
    startScrollingLeft = people.scrollLeft


}


let draggingNum2 = (e) =>{
    if(!isDraged) return ;
    people.scrollLeft = startScrollingLeft -  (e.pageX - stratX )
}

let dragStopNum2 = () =>{
    isDraged = false
    people.classList.remove("dragged")
}

people.addEventListener("mousedown" , dragStartNum2)
people.addEventListener("mousemove" , draggingNum2)
document.addEventListener("mouseup",dragStopNum2)


const autoPlay = ()=> {
    if(window.innerWidth < 800) return ;

    timeOut = setInterval(function(){
        people.scrollLeft += cardWidth 
        if(people.scrollLeft>1111){
            people.scrollLeft = 32
        }
    },3000)

}
autoPlay()

