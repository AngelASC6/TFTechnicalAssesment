let button = document.getElementById("startButton")
let menuDiv = document.getElementById("menu")
let mainPage = document.getElementById("mainPage")
let aboutPage = document.getElementById("aboutPage")
let photoPage = document.getElementById("photoPage")
let contactPage = document.getElementById("contactPage")
let menuItemsArray = ['About Me','Photos','Contact Me']
let menu
let aboutMes
let counter = 0


button.onclick = function(){
    mainPage.innerHTML += `<div id="menu" class="animated fadeInLeft duration-10s" style="animation-duration: .75s"> a </div>`
    //makes a referance for the menu page
    menu = document.getElementById("menu")
    //Removes the animated class and drops the menu options
    menu.addEventListener('animationend', function() {
        menu.classList.remove("animated","fadeInLeft");     
    })
    
    let addItems = setInterval(function(){
        //makes each menu button
        menu.innerHTML += `<h3 id="item${counter}" class="menuItem animated fadeIn" onclick ="clickFunction${counter}()">${menuItemsArray[counter]}<h3>`
        aboutMe = document.getElementsByClassName("menuItem")[counter]
        aboutMe.addEventListener('animationend',function(){
            aboutMe.classList.remove("animated","fadeIn");     
        })
        counter++

        if(counter == 3){
            clearInterval(addItems)
        }

    },500)
}

function clickFunction0() {
    aboutPage.style.display = "flex"
    photoPage.style.display = "none"
    contactPage.style.display ="none"   

}

function clickFunction1(){
    aboutPage.style.display ="none"
    photoPage.style.display = "flex" 
    contactPage.style.display ="none"   
  
}

function clickFunction2(){
    aboutPage.style.display ="none"
    photoPage.style.display = "none"
    contactPage.style.display ="flex"   
}
