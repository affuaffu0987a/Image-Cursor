let elemAll=document.querySelectorAll(".elem")

elemAll.forEach((val)=>{
    val.addEventListener("mouseenter",()=>{
        val.children[1].style.opacity="1"
    })
    val.addEventListener("mouseleave",()=>{
        val.children[1].style.opacity="0"
    })
    val.addEventListener('mousemove',(eve)=>{
        val.children[1].style.left = eve.x+"px"
        // val.children[1].style.top = eve.y+"px"
    })
})