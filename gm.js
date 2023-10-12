//load required js packages
document
  .getElementsByTagName("head")[0]
  .appendChild(document.createElement("script")).src =
  "https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.21.1/parser.min.js";
document
  .getElementsByTagName("head")[0]
  .appendChild(document.createElement("script")).src =
  "https://cdn.jsdelivr.net/npm/togpx@0.5.4/togpx.js";

// buttons to add to the map
const newButtons = [
  {
    id: "mpts",
    class: "mpts",
    title: "Multipontok összekötése",
    onClick: "joinMultiPoints()",
    textContent: "☍",
  },
  {
    id: "dlmpts",
    class: "dlmpts",
    title: "Összekötés letöltése GPX-ként",
    onClick: "dlMultiPointJoins()",
    textContent: "⤓",
  },
  {
    id: "lgpx",
    class: "lgpx",
    title: "GPX file betöltése",
    onClick: "loadGPX()",
    textContent: "ᓬ",
  },
];
buttonsDiv = document.getElementById("setup");
for (const btn of newButtons) {
  const div = document.createElement("div");
  for (const attr of ["id", "class", "title", "onClick"]) {
    div.setAttribute(attr, btn[attr]);
  }
  div.textContent = btn.textContent;
  buttonsDiv.appendChild(div);
}

// load the script functionality into the page
var s = document.createElement("script");
s.src = chrome.runtime.getURL("gm_functions.js");
s.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);

// load the script functionality into the page
var s = document.createElement("script");
s.src = chrome.runtime.getURL("gm_others.js");
s.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);
