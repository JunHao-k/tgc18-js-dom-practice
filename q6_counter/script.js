let increase = document.querySelector('#increment')
let decrease = document.querySelector('#decrement')
let reset = document.querySelector('#reset')
let boxValue = document.querySelector('#box')

if(boxValue.innerHTML == "0"){
    document.querySelector('#box').style.backgroundColor = "green"
}

increase.addEventListener('click' , () => {
    if(boxValue.innerHTML < 10){
        boxValue.innerHTML = parseInt(boxValue.innerHTML) + 1
        if(boxValue.innerHTML % 2 == 0){
            document.querySelector('#box').style.backgroundColor = "green"
        }
        else{
            document.querySelector('#box').style.backgroundColor = "red"
        }
    }
})


decrease.addEventListener('click' , () => {
    if(boxValue.innerHTML > 0){
        boxValue.innerHTML = parseInt(boxValue.innerHTML) - 1
        if(boxValue.innerHTML % 2 == 0){
            document.querySelector('#box').style.backgroundColor = "green"
        }
        else{
            document.querySelector('#box').style.backgroundColor = "red"
        }
    }
})

reset.addEventListener('click' , () => {
    boxValue.innerHTML = "0"
    document.querySelector('#box').style.backgroundColor = "green"
})
