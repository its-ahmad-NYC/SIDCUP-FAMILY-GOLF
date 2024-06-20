gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -40%",
        end: "top -70%",
        scrub: 2,
    }
})


let crsr = document.querySelector("#cursor")
let blurcrsr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (e)=>{
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
    blurcrsr.style.left = e.x- 225 + "px"
    blurcrsr.style.top = e.y- 225 + "px"
})