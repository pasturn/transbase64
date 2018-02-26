var mX, mY

function transSelection(evt) {
  mX = evt.pageX;
  mY = evt.pageY
  var sel = window.getSelection();
  var selectedText = sel.toString();
  console.log(selectedText)
  if (selectedText) {
    chrome.extension.sendRequest({'base64String': selectedText}, onExtensionMessage);
  }
}

function onExtensionMessage(request){
  if (request['resultString']) {
    addTransResult(request['resultString'])
  }
}

function addTransResult(str) {
  var wrap = document.createElement('div')
  wrap.setAttribute("id", "tsWrap")
  wrap.setAttribute("style", "border: 1px solid gray;max-width: 300px;position: absolute; background: #fff;  padding: 10px; box-shadow: 3px 3px 0 #bbb; border-radius: 4px;left:" + (mX + 40 )+ "px;top:"+ (mY - 25) +"px;" )
  wrap.innerText = str
  document.body.appendChild(wrap)
}

function removeTransResult() {
  var wrap = document.getElementById("tsWrap")
  if(wrap) {
    document.body.removeChild(wrap)
  }
}

function initContentScript() {
  document.addEventListener('mouseup', transSelection, false)
  document.addEventListener('mousedown', removeTransResult, false)
}

initContentScript()
