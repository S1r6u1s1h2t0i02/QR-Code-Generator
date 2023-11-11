var textInput=document.querySelector("#textInput")
var QRImg=document.querySelector("#QRImg")
async function generate(){
    var apiURL="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+textInput.value
    var imgSource= await fetch(apiURL)
    var QRImg=document.querySelector("#QRImg")
    QRImg.src=apiURL;
    console.log(QRImg)
    QRImg.classList.toggle("show-qr")
    document.querySelector(".window").style.height="300px"
}
