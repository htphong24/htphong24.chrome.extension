console.log("running background.js");

chrome.action.onClicked.addListener(async (tab) => {
  const key = 'htphong24_extension_enabled';
  
  // Get current enabled/disabled state from storage
  const { [key]: isEnabled } = await chrome.storage.local.get(key);

  // Toggle the state
  const newState = !isEnabled;

  // Save new state
  await chrome.storage.local.set({ [key]: newState });

  // Reload the page to apply the change
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => location.reload()
    });
  }

  // Optionally update the icon (see below)
});
