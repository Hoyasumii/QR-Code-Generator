async function start() {
  const urlParams = new URLSearchParams(window.location.search);
  const linkParam = urlParams.get("link");

  if (linkParam != null) {
    document.getElementById("qr-code-anchor").href = linkParam;
    document.getElementById("qr-code-area").src = await QRCode.toDataURL(
      linkParam,
      {
        type: "image/webp",
        margin: 1,
        rendererOpts: {
          quality: 1,
        },
        scale: 10,
      }
    );
  }
}

start();

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
