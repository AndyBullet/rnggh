var va0;
var va1;
var pulsante = document.getElementsByTagName("iframe")[0].contentWindow.document.querySelectorAll("input[type='button']")[0];
var generated = document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName('span')[5];
setInterval(()=>{
  va0 = document.getElementsByTagName("iframe")[0].contentWindow.document.querySelectorAll("input[type='number']")[0].value;
  va1 = document.getElementsByTagName("iframe")[0].contentWindow.document.querySelectorAll("input[type='number']")[1].value;
}, 500);
