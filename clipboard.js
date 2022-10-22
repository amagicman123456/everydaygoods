const copyButton = document.querySelector(".clipboard");
const copyText = document.querySelector(".text");

copyButton.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyButton.classList.toggle("success");
    copyText.classList.add("active");

    setTimeout(function () {
        copyButton.classList.toggle("success");
    }, 2000);
})

var btn = document.querySelector('button.clipboard');

// var example2 = document.querySelector('example2');

btn.onclick = () => {
    alert("Copied!")
}