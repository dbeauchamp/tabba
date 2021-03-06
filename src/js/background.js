chrome.runtime.onMessage.addListener(function(message, sender, callback) {
  console.debug("[onMessage]", message, sender)

  switch(message.type) {
    case 'getTabs':
      return chrome.tabs.query({ currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(sender.tab.id, { type: 'receivedTabs', tabs })
      })
    case 'selectTab':
      return chrome.tabs.update(message.id, {active: true})
    case 'closeTab':
      return chrome.tabs.remove(message.id)
  }
})
