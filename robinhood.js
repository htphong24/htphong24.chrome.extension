export function cleanupSpace() {
  //console.log("executing runRobinhoodScript...");
  const match = window.location.pathname.match(/^\/stocks\/([A-Z]+)/);
  if (!match) return;

  const ticker = match[1];

  // ticker name
  if (document.querySelector("h1") != null) {
    document.querySelector("h1").style.display = "none";
  }

  // price
  //if (document.querySelector("h2 div div") != null) {
  //  document.querySelector("h2 div div").innerHTML = "<span>" + ticker + "</span> " + document.querySelector("h2 div div").innerHTML;
  //}

  // navigation bar
  if (document.querySelector("nav") != null) {
    document.querySelector("nav").style.display = "none";
  }

  // main content
  if (document.querySelector("main.css-evezer") != null) {
    document.querySelector("main.css-evezer").style.padding = 0;
  }
  if (document.querySelector("main.css-evezer div div") != null) {
    document.querySelector("main.css-evezer div div").style.paddingTop = 0;
  }

  // order panel
  if (document.querySelector("aside") != null) {
    document.querySelector("aside").style.padding = 0;
    document.querySelector("aside").style.position = "inherit";
  }

  // Stock Lending
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("stock lending")) {
      section.style.display = "none";
    }
  });

  // About
  //document.querySelectorAll("section")[4].style.display = "none";

  // Key statistics - not working
  //console.log("printing document.querySelectorAll('section')[5]...");
  //console.log(document.querySelectorAll('section')[5]);
  //document.querySelectorAll("section")[5].style.display = "none";
  // document.querySelectorAll('section').forEach(section => {
  // console.log("debugging key statistics...");
  // console.log(section.querySelector('h2 span').textContent);
  // if (section.textContent.toLowerCase().includes('key statistics')) {
  // console.log("found key statistics...");
  // section.style.display = 'none';
  // }
  // });

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
    //console.log("debugging people also own...");
    if (section.textContent.toLowerCase().includes("people also own")) {
      //console.log("found people also own...");
      section.style.display = "none";
    }
  });

  // Average Annual Return
  document.querySelectorAll("section").forEach((section) => {
    if (section.textContent.toLowerCase().includes("average annual return")) {
      section.style.display = "none";
    }
  });

  // Disclosure
  if (document.querySelector("div[data-testid='DisclosureContentMain']") != null) {
    document.querySelector("div[data-testid='DisclosureContentMain']").style.display = "none";
  }

  return true; // indicates change was made
}
