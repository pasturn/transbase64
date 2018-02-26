var decodeBtn = document.getElementById('decodeBtn');

decodeBtn.addEventListener('click', decodeAction, false)

function decodeAction() {
  var base64String = document.querySelector('.content-field').value;
  var display = document.querySelector('.content-display')
  var base64 = new Base64()
  var decodeString = base64.decode(base64String)

  display.innerHTML = decodeString
}


