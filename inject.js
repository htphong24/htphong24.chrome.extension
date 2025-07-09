import { cleanupSpace } from "./robinhood.js";

function runRobinhoodScript() {
  const debouncedReplace = debounce(runRobinhoodScript, 100);

  const observer = new MutationObserver(() => {
    const updated = debouncedReplace();
    if (updated) {
      observer.disconnect(); // stop watching once done
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // initial call
  cleanupSpace();
}

// debounce helper
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

runRobinhoodScript();
