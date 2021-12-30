//load required js packages
document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src =
  'https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.21.1/parser.min.js';
document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src =
  'https://cdn.jsdelivr.net/npm/togpx@0.5.4/togpx.js'

// buttons to add to the map
const newButtons = [
  '<div id="mpts" class="mpts" title="Multipontok összekötése" onClick="joinMultiPoints()">☍</div>',
  '<div id="dlmpts" class="dlmpts" title="Összekötés letöltése GPX-ként" onClick="dlMultiPointJoins()">⤓</div>',
  '<div id="lgpx" class="lgpx" title="GPX file betöltése" onClick="loadGPX()">ᓬ</div>', //Ꮆ
]
buttonsDiv = document.getElementById('setup')
for (const btn of newButtons) {
  buttonsDiv.insertAdjacentHTML('beforeend', btn);
}

// load the script functionality into the page
var s = document.createElement('script');
s.src = chrome.runtime.getURL('functions.js');
s.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);