const urlParams = new URLSearchParams(window.location.search);
const linkParam = urlParams.get("link");

if (linkParam != null) {
  document.getElementById("qr-code-anchor").href = linkParam;
  document.getElementById("qr-code-area").src =
    `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${linkParam}`;
}

const inputArea = document.getElementById("input-area");
const inputAreaInput = inputArea.getElementsByTagName("input")[0];
const inputAreaLabel = inputArea.getElementsByTagName("label")[0];

function inputFocusInEvent() {
  inputAreaLabel.style.top = "-10px";
}

function inputFocusOutEvent() {
  inputAreaLabel.style.top = inputAreaInput.value !== "" ? "-10px" : "10px";
}

inputAreaInput.addEventListener("focusin", inputFocusInEvent);
inputAreaInput.addEventListener("focusout", inputFocusOutEvent);
