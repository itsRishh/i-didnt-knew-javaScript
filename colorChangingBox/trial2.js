const box = document.querySelector(".center");
var value = 0;
const mid_x = box.clientWidth/2;
console.log(mid_x);

box.addEventListener("mousemove", function (pos) { 

    let x = pos.clientX - box.getBoundingClientRect().left;
    let y = pos.clientY - box.getBoundingClientRect().top;

    if (x < mid_x) {
        value = gsap.utils.mapRange(0, mid_x, 255, 0, x);
        gsap.to(box, {
            backgroundColor: `rgb(${value}, 0, 0)`,
            ease: Power4 
        }); 
    }  
    else {
        value = gsap.utils.mapRange(mid_x, mid_x*2, 0, 255, x);
        gsap.to(box, {
            backgroundColor: `rgb(0, 0, ${value})`,
            ease: Power4 
        }); 
    }  
    
    console.log(value, x, value, y)

})

box.addEventListener("mouseleave", () => {
    gsap.to(box, {
        backgroundColor: "transparent",
        ease: Power4     
    })
})