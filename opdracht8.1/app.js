let num3 = document.getElementById('num1')
let num4 = document.getElementById('num2')
let h1 = document.getElementById("header")
function multyply () {
    h1 = num3.value * num4.value;
    if (h1 <= 0) {
        h1.innerText = "Het antwood is te laag ";
    } else {
       h1.innerText = "Het antwood is " + h1;
    }
}
function devide () {
    h1 = num3.value / num4.value;
    if (h1 <= 0) {
        document.getElementById("header").innerText = "Het antwood is te laag ";
    } else {
        document.getElementById("header").innerText = "Het antwood is " + h1;
    }
}
function add () {
    h1 = Number(num3.value) + Number(num4.value);
    if (h1 <= 0) {
        document.getElementById("header").innerText = "Het antwood is te laag ";
    } else {
        document.getElementById("header").innerText = "Het antwood is " + h1;
    }
}
function minus () {
    h1 = num3.value -  num4.value;
    if (h1 <= 0) {
        document.getElementById("header").innerText = "Het antwood is te laag ";
    } else {
        document.getElementById("header").innerText = "Het antwood is " + h1;
    }
}
