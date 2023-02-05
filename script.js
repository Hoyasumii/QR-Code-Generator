const urlParams = new URLSearchParams(window.location.search);
const linkParam = urlParams.get("link");

if (linkParam != null && (linkParam.includes("http://") || linkParam.includes("https://"))) {
    document.getElementById("qr-code-area").src = "https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=" + urlParams.get("link");
}

let inputArea = document.getElementById("input-area");
let inputAreaInput = inputArea.getElementsByTagName("input")[0];
let inputAreaLabel = inputArea.getElementsByTagName("label")[0];

function inputFocusInEvent() {
    inputAreaLabel.style.top = "-10px";
}

function inputFocusOutEvent() {
    inputAreaLabel.style.top = (inputAreaInput.value != "") ? "-10px" : "10px";
}

inputAreaInput.addEventListener("focusin", inputFocusInEvent);
inputAreaInput.addEventListener("focusout", inputFocusOutEvent);