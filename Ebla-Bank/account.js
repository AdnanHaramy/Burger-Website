

var firstbalance = parseInt(localStorage.getItem("balance"));
document.getElementById("idmoney").innerHTML = firstbalance;
function deposit() {
    //
    var htmlText = parseInt(document.getElementById("idmoney").innerHTML);
    var inputValue = parseInt(document.getElementById("input-value").value);
    //
    var result = htmlText + inputValue;
    // result is a number
    console.log(result);
    let newResult = result.toString();
    localStorage.setItem("balance", newResult);
    document.getElementById("idmoney").innerHTML = htmlText + inputValue;
}
function withdraw() {
    //
    var htmlText = parseInt(document.getElementById("idmoney").innerHTML);
    var inputValue = parseInt(document.getElementById("input-value").value);
    //
    var result = htmlText - inputValue;
    // result is a number
    console.log(result);
    let newResult = result.toString();
    localStorage.setItem("balance", newResult);
    document.getElementById("idmoney").innerHTML = htmlText - inputValue;
}





// function withdraw() {
//     var htmlText1 = parseInt(document.getElementById("idmoney").innerHTML);
//     var inputVal = parseInt(document.getElementById("input-value").value);
//     document.getElementById("idmoney").innerHTML = htmlText1 - inputVal;
// }
