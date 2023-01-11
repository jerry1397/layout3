let btn = document.querySelector(".click")
let list = document.querySelector("ul")
console.log(list);

btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(btn.classList.toggle("hide"))
    {
        list.style.display = "grid";
        list.style.top = "65px";
    }
    else{
        list.style.display = "block";
        list.style.top = "-200px";
    }
    s
})