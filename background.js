console.log("******");
// function update(days) {

  // chrome.action.setBadgeText({text: '1'});
// }
setInterval(() => {

chrome.tabs.query({windowType:'normal'}, function(tabs) {
  chrome.action.setBadgeText({text: `${tabs.length}`});
}); 
}, 10000);
