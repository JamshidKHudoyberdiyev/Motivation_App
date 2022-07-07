//Selectors

const quota = document.querySelector('.quote')
const text = document.querySelector('.quote__text')
const author = document.querySelector('.quote__author')
const btn = document.querySelector('#btn')

// fetch API
// Functions


function getQuote() {
    fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
            let index = Math.round((Math.random()*1643))
            text.textContent=data[index].text
            author.textContent=data[index].author
        });


        setTimeout(()=>{
            btn.classList.add('active');
        },2000)   
}

function newQuote(e) {
    if (!e.target.matches("button.active")){return}
    else{
        getQuote()
        btn.classList.remove("active")
    }
}

window.addEventListener('load', getQuote)
btn.addEventListener('click', newQuote);


//loader
 let loader=document.querySelector('.loader')

 setTimeout(()=>{
     loader.classList.add("opac")
 },2000)
 setTimeout(()=>{
     loader.classList.add("none")
 },3000)

 