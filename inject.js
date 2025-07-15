import { cleanupSpace } from "./robinhood.js";

console.log("running inject.js");

const runRobinhoodScript = () => {
  console.log("inject.js > runRobinhoodScript...");

  let cleanupDone = false;

  const debouncedCleanup = debounce(() => {
    if (cleanupDone) {
      observer.disconnect(); // stop observing
      return;
    }

    const updated = cleanupSpace();

    if (updated) {
      cleanupDone = true;
      observer.disconnect(); // stop observing once cleanup succeeds
    }
  }, 1000);

  const observer = new MutationObserver(() => {
    debouncedCleanup();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial call
  const initialCleanup = cleanupSpace();

  if (initialCleanup) {
    cleanupDone = true;
    observer.disconnect(); // stop observing if initial cleanup succeeded
  }
}

// debounce helper
const debounce = (fn, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

runRobinhoodScript();
