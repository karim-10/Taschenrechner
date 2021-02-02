const result = document.getElementById('result')

function addChar(para) {
    console.log("Working", para)
    result.innerHTML += para
}
function resetMe() {
    result.innerHTML = ""
}
function calcMe() {
    result.innerHTML = eval(result.innerHTML)
}