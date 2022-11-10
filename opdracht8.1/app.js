let input1 = document.getElementById("input1")

let input2 = document.getElementById("input2")

let h1 = document.getElementById("h1")

function multiply(){
   let answer=  input1.value * input2.value

   h1.innerText = "Het antwoord is " + answer
    

}
function devide(){
    let answer=  input1.value / input2.value    


    h1.innerText = "Het antwoord is " + answer
}
function add(){

    let answer=  Number(input1.value) + Number(input2.value)    
    h1.innerText = "Het antwoord is " + answer
}
function minus(){
    let answer=  input1.value - input2.value
    h1.innerText = "Het antwoord is " + answer
}
