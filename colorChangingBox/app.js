const box = document.querySelector(".center");
var red = 0;
var blue = 0;
const mid_x = Math.ceil(box.clientWidth/2);
console.log(mid_x);

box.addEventListener("mousemove", function (pos) {
    var x_box = Math.ceil(box.getBoundingClientRect().left);
    var y_box = Math.ceil(box.getBoundingClientRect().top); 
    let x = pos.clientX - x_box;
    let y = pos.clientY - y_box;

    // (x < mid_x) ? red = mid_x - x : red = 0; 
    if (x < mid_x) {
        red = mid_x - x;
        red = red/100;
        box.style.backgroundColor = "#FF0000"; 
        box.style.opacity = red; 
    }  
    else {
        blue = x - mid_x;
        blue = blue / 100;
        box.style.backgroundColor = "#0000FF"; 
        box.style.opacity = blue;
    }  
    
    console.log(red, x, blue, y)

})