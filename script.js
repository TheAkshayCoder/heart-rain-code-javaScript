function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);
  heart.innerHTML = `	&#10084;`;

  heart.style.left=Math.random()*100+'vw'
  heart.style.animationDuration=Math.random()*2+3+"s"
  document.body.style.background=randombg()

  

}



const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    setInterval(()=>{
        createHeart()
    },300)
})

function randombg(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`
}

