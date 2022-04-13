const ui = document.getElementById("card__list")
const list = ui.querySelectorAll(".card--circle")
const submit = document.getElementById("btn-submit");
const cardRating = document.getElementById("rating");
const thank = document.getElementById("thank");
const rate = document.getElementsByClassName("card__selection__paragraph__box");
let value = 0;
list.forEach(item=>{
    item.addEventListener("click",event=>{
        value=parseInt(event.target.textContent);
        item.classList.toggle("card--circle--orange")
        for(let count=0;count<list.length;count++){
            if(parseInt(list[count].textContent)!==value){
                list[count].classList.remove("card--circle--orange")
            }
        }
    });
})
submit.addEventListener("click",()=>{
    cardRating.classList.toggle("hidden");
    thank.classList.toggle('hidden')
    rate[0].innerHTML=`<p class="card__selection__paragraph">You selected ${value} out of 5</p>`

})
