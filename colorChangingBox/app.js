const box = document.querySelector(".center");
var value = 0;
const mid_x = Math.ceil(box.clientWidth/2);
console.log(mid_x);

box.addEventListener("mousemove", function (pos) {
    var x_box = Math.ceil(box.getBoundingClientRect().left);
    var y_box = Math.ceil(box.getBoundingClientRect().top); 
    let x = pos.clientX - x_box;
    let y = pos.clientY - y_box;

    // (x < mid_x) ? value = mid_x - x : value = 0; 
    if (x < mid_x) {
        value = mid_x - x; // for more complex calculation >>>
        value = (x*255)/100;
        // value = value/100;
        // box.style.backgroundColor = "#FF0000"; 
        // box.style.opacity = value; // old approach
        box.style.backgroundColor = `rgb(${value}, 0, 0)`;
    }  
    else {
        // value = x - mid_x;
        value = (x*255)/100;
        // value = value / 100; // old approach
        box.style.backgroundColor = `rgb(0, 0, ${value})`; 
    }  
    
    console.log(value, x, value, y)

})