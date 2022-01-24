const linksForm = document.getElementById("links-form");

let linksTableRef = document.getElementById("table-body");

linksForm.addEventListener("submit", sendForm);

// variables para los botones que se crearan al añadir links
let btnEdit;
let btnDelete;

// convertir contenido de formulario en FormData()
function sendForm(event) {
  event.preventDefault();
  let linksFormData = new FormData(linksForm);
  inserRowLinksTable(linksFormData);
}

// añadir FormData a la tabla en celdas nuevas
function inserRowLinksTable(linksFormData) {
  let newLinksRowRef = linksTableRef.insertRow(-1);

  let newLinksCellRef = newLinksRowRef.insertCell(0);
  let linkAdded = document.createElement("a");
  linkAdded.href = linksFormData.get("form-content");
  linkAdded.textContent = linksFormData.get("form-title");
  linkAdded.target = "_blank";
  newLinksCellRef.appendChild(linkAdded);

  newLinksCellRef = newLinksRowRef.insertCell(1);
  btnEdit = document.createElement("button");
  btnDelete = document.createElement("button");
  btnEdit.innerHTML = '<i class="far fa-edit"></i>';
  btnDelete.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
  newLinksCellRef.append(btnEdit, btnDelete);
  btnEdit.id = "btn-edit";
  btnDelete.id = "btn-delete";

  btnEdit.addEventListener('click', doSomething);
  btnDelete.addEventListener('click', doSomethingToo);

}


    
function doSomething() {
    btnEdit.style.color = 'green';
    console.log('edit button working');
 }

 function doSomethingToo() {
    btnDelete.style.color = 'red';
    console.log('delete button working');
 }
