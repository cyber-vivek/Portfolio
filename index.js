const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.3}s`;
            }

        })
    })
    document.onclick = function(e){
        // console.log(e.target.tagName);
        if(e.target.id != 'sidebar' && e.target.id != 'togButton'){
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navlinks.forEach((link,index) => {
                    link.style.animation = '';
    
            })
        }
    }
}

navSlide();




// Typing animation Code goes here

// constructor function - Used to create objects
const Typewriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    isDeleting = false;
}

// Functions defined using proptype are common to all intance(objects)
// while functions defined on constructor function are created for every instance
Typewriter.prototype.type = function(){
    // console.log(this.words);
    // console.log(this.wait);

    // Current Index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting){
        // Remove char
        this.txt = fullTxt.substring(0,this.txt.length-1);
    }
    else{
        //Add char
        this.txt = fullTxt.substring(0,this.txt.length+1);

    }
    // Insert txt in the element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    // Type Speed

    // Initial typespeed
    let typeSpeed = 150;
    if(this.isDeleting){
        typeSpeed/=2;
    }

    // If word is complete
    if(!this.isDeleting&&this.txt === fullTxt){
        //Make a pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    }
    else if(this.isDeleting&&this.txt === ""){
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        // Pause before typing
        typeSpeed = 300;
    }



    setTimeout(()=>this.type(),typeSpeed);
}

// Init DOM on load
document.addEventListener('DOMContentLoaded',init)

function init(){
    const txtElement = document.querySelector('.typingText .typeText');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Initialize Typewriter
    const typeWriter = new Typewriter(txtElement,words,wait);
    // console.log(typeWriter.words);
    typeWriter.type();
}

function handlescroll(elem){
    let element = document.querySelector(elem);
    let pos = element.offsetTop;
    console.log(pos);
    let navh = document.querySelector('nav').offsetHeight;
    pos-=navh;
    window.scrollTo(0,pos);
}


// rec 


let url = "https://djnago1.vercel.app/info/"

async function fun(){
    let res = await fetch(url);
    console.log(res);
}

fun();