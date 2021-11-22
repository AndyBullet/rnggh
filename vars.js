function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var pulsante;
var va0;
var va1;

if(inIframe = false){
  pulsante = document.querySelectorAll("input[value=Generate]")[0];
  va0 = document.querySelectorAll("input[type=number]")[0].value;
  va1 = document.querySelectorAll("input[type=number]")[1].value;
}
else if(inIframe = true){
  pulsante = document.getElementsByTagName('iframe')[0].contentWindow.document.querySelectorAll("input[type='number']")[0].value;
  va0 = document.getElementsByTagName('iframe')[0].contentWindow.document.querySelectorAll("input[type=number]")[0].value;
  va1 = document.getElementsByTagName('iframe')[0].contentWindow.document.querySelectorAll("input[type=number]")[1].value;
}
