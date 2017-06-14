chrome.tabs.executeScript({ code: "console.log('dsff');" }, function() {
    if (chrome.runtime.lastError) {
         console.log("ERROR: " + chrome.runtime.lastError.message);
    }
});