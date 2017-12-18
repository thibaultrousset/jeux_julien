
function fullHeight(){
  document.documentElement.classList.add("h-100");
  document.body.classList.add("w-100","h-75");
  document.getElementById('main').classList.add("d-flex", "flex-column", "h-100");
}



function CreateHeader(){
  var container=document.body;
  var main=document.querySelector('#main');
  var header = document.createElement("HEADER");
  header.className="card-header bg-danger text-center col-12";
  var tittle = document.createElement('h1');
  tittle.textContent="Mon Header";
  header.appendChild(tittle);
  container.insertBefore(header, main);
}

function CreateFooter(){
  var container=document.body;
  var footer = document.createElement("FOOTER");
  footer.className="card-footer fixed-bottom bg-danger text-center col-12";
  var tittle = document.createElement('p');
  tittle.textContent="Mon Footer";
  footer.appendChild(tittle);
  container.appendChild(footer);
}

function CreateLine(nbCol){
  var container=document.querySelector('#main');
  var line = document.createElement("div");
  line.classList.add("d-flex", "flex-row", "align-items-stretch", "h-25", "row","bg-primary","blabla");
  container.appendChild(line);
  for (var i=0;i<nbCol; i++) {
    CreateColumn(line);
  }
}

function CreateColumn(row){
  //var container=document.querySelector('#myline');
  var column = document.createElement("div");
  column.className="m-1 card col bg-light";
  row.appendChild(column);
}

function AddColumn(indice, nbCol){
  var tabLines = document.querySelectorAll('.blabla');
  var selectElem = tabLines[indice];
  for (var i=0;i<nbCol; i++) {
  var column = document.createElement("div");
  column.className="m-1 card col bg-light";
  selectElem.appendChild(column);
}
}


fullHeight();

CreateFooter();
CreateLine(2);
CreateLine(5);
AddColumn(0,3);
CreateHeader();
