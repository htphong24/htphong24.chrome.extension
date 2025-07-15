console.log("running robinhood.js");

const cleanupSpace = () => {
  console.log("robinhood.js > cleanupSpace...");
  //const match = window.location.pathname.match(/^\/stocks\/([A-Z]+)/);
  //if (!match) return;

  //const ticker = match[1];

  // ticker name
  //console.log('document.querySelector("h1"): ', document.querySelector("h1"));
  //console.log('document.querySelector("nav"): ', document.querySelector("nav"));
  if (
    // ticker name
    document.querySelector("h1") != null &&
    // navigation bar
    document.querySelector("nav") != null &&
    // main content
    document.querySelector("main.css-evezer") != null &&
    document.querySelector("main.css-evezer div div") != null &&
    // order panel
    document.querySelector("aside") != null &&
    // Disclosure
    document.querySelector("div[data-testid='DisclosureContentMain']") != null
  ) {
    document.querySelector("h1").style.display = "none";
    document.querySelector("nav").style.display = "none";
    document.querySelector("main.css-evezer").style.padding = 0;
    document.querySelector("main.css-evezer div div").style.paddingTop = 0;
    document.querySelector("aside").style.padding = 0;
    document.querySelector("aside").style.position = "inherit";
    document.querySelector("div[data-testid='DisclosureContentMain']").style.display = "none";
    cleanupSections();

    return true; // indicates change was made
  }

  return false;
}

const cleanupSections = () => {
  // Stock Lending
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("stock lending")) {
      section.style.display = "none";
    }
  });

  // Trading Trends
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("trading trends")) {
      section.style.display = "none";
    }
  });

  // Analyst ratings
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("analyst ratings")) {
      section.style.display = "none";
    }
  });

  // Related lists
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("related lists")) {
      section.style.display = "none";
    }
  });

  // People also own - not working
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("people also own")) {
      section.style.display = "none";
    }
  });

  // Average Annual Return
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("average annual return")) {
      section.style.display = "none";
    }
  });
};

export { cleanupSpace }; 