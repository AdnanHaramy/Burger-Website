var firstBalance = parseInt(localStorage.getItem("balance"));
document.getElementById('money').innerHTML = firstBalance;

function withdraw() {
    var htmlText = parseInt(document.getElementById('money').innerHTML);
    var inputValue = parseInt(document.getElementById('input-value').value);
    var result = htmlText - inputValue;
    var newResult = result.toString();
    localStorage.setItem("balance", newResult);
    document.getElementById('money').innerHTML = htmlText - inputValue;
    document.getElementById('input-value').value = null;
}
function deposit() {
    var htmlText = parseInt(document.getElementById('money').innerHTML);
    var inputValue = parseInt(document.getElementById('input-value').value);
    var result = htmlText + inputValue;
    var newResult = result.toString();
    localStorage.setItem("balance", newResult);
    document.getElementById('money').innerHTML = htmlText + inputValue;
    document.getElementById('input-value').value = null;

}