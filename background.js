function initBackground(){
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request['base64String']) {
        var base64 = new Base64()
        console.log(base64)
        sendResponse({'resultString': base64.decode(request['base64String'])});
      }
    });
}

initBackground()