function init() {
    var html_btn = document.getElementById("btn");
    html_btn.onclick = convert_button_click; 
}
function convert_button_click() {
    var usd = prompt("Enter USD: ");
    var vnd = usd*23;
    var html_message = document.getElementById("message");
    html_message.textContent = "You enter: " + usd + " USD, this is converted to VND: " + vnd + "k";

}

window.onload = init;