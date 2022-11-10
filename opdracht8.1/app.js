let input1 = document.getElementById("input1")

let input2 = document.getElementById("input2")

let h1 = document.getElementById("h1")

function multiply(){
    if (input1.value <1 && input2.value <1 ) {
        h1.innerText = "het getal is te laag"
        
    } else {
        let answer=  input1.value * input2.value

        h1.innerText = "Het antwoord is " + answer
    }
 
    

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
