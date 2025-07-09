chrome.storage.local.get('htphong24_extension_enabled', (result) => {
  console.log("result.htphong24_extension_enabled: ", result.htphong24_extension_enabled);
  if (!result.htphong24_extension_enabled) {
    console.log('Extension is disabled');
    return;
  }

  // Inject module script into the page
  const script = document.createElement('script');
  script.type = 'module';
  script.src = chrome.runtime.getURL('inject.js');
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
});