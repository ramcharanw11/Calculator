let input1 = document.getElementById('item1')
let input2 = document.getElementById('item2')
let button = document.querySelector('button')
button.onclick = function () {
    let num1 = input1.value
    input1.value = ''
    let num2 = input2.value
    input2.value = ''

    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2)

    input1.focus()
    input2.focus()
}

let input3 = document.getElementById("item3")
let input4 = document.getElementById("item4")
let button1 = document.getElementById("sub")
button1.onclick = function () {
    let num3 = input3.value
    input3.value = ''
    let num4 = input4.value
    input4.value = ''
    document.getElementById("result1").innerHTML = parseInt(num3) - parseInt(num4)
    input3.focus()
    input4.focus()
}
let input5 = document.getElementById("item5")
let input6 = document.getElementById("item6")
let button2 = document.getElementById("multi")
button2.onclick = function () {
    let num5 = input5.value
    input5.value = ''
    let num6 = input6.value
    input6.value = ''
    document.getElementById("result2").innerHTML = parseInt(num5) * parseInt(num6)
    input5.focus()
    input6.focus()
}