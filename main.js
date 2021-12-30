function run() {
    let htmlCode = document.querySelector(".text-area #html-code").value;
    let cssCode = "<style>" + document.querySelector(".text-area #css-code").value + "</style>";
    let jsCode = document.querySelector(".text-area #js-code").value;
    let output = document.querySelector(".editor #output");
    //console.log(htmlCode, cssCode, jsCode, output)
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode)
  }
  document.querySelector(".text-area #html-code").addEventListener("keyup",run)
  document.querySelector(".text-area #css-code").addEventListener("keyup",run)
  document.querySelector(".text-area #js-code").addEventListener("keyup",run)

