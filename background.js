chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSelectedText') {
      chrome.tabs.executeScript(
          { code: 'window.getSelection().toString();' },
          (selection) => {
              sendResponse({ text: selection[0] });
          }
      );
      return true;
  }
});
