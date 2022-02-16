// variables para los botones que se crearan al añadir links
let btnDelete;

// declarar y llamar a las variables para el formulario
// y añadir eventlisteners y functions
const linksForm = document.getElementById("links-form");

let linksTableRef = document.getElementById("table-body");

linksForm.addEventListener("submit", sendForm);

// convertir contenido de formulario en FormData()
function sendForm(event) {
  event.preventDefault();
  let linksFormData = new FormData(linksForm);
  let formObj = createFormObj(linksFormData);
  saveLinksObj(formObj);
  insertRowLinksTable(formObj);
  linksForm.reset();
}

// añadir evento al cargar el DOM
document.addEventListener("DOMContentLoaded", loadDOM);

// function para recorrer el form y añadir el nuevo campo
function loadDOM() {
  let linksObjArr = JSON.parse(localStorage.getItem("linksData"));
  linksObjArr.forEach(function (linksElem) {
    insertRowLinksTable(linksElem);
  });
}

// crear ID para cada nueva fila del form
function getNewLinkId() {
  let lastLinkId = localStorage.getItem("lastLinkId") || "-1";
  let newLinkId = JSON.parse(lastLinkId) + 1;
  localStorage.setItem("lastLinkId", JSON.stringify(newLinkId));
  return newLinkId;
}

// pasa como parámetro del formId de la fila que quiero eliminar
function delLinkObj(formId) {
  // obtener los links de la "base de datos" (localStorage) (convierto de JSON a Object)
  let linksObjArr = JSON.parse(localStorage.getItem("linksData"));
  // busco la posición del link según su formId
  let linkIndexArr = linksObjArr.findIndex(element => element.formId === formId);
  // elimino el elemento que se corresponde con el formId
  linksObjArr.splice(linkIndexArr, 1);
  //  convierto a formato JSON de nuevo
  let linksArrJSON = JSON.stringify(linksObjArr);
  // vuelvo a guardar el array de form nuevamente en localStorage 
  localStorage.setItem("linksData", linksArrJSON);
}

// convertir el formData en un objeto
function createFormObj(linksFormData) {
  let formTitle = linksFormData.get("form-title");
  let formContent = linksFormData.get("form-content");
  let formId = getNewLinkId();
  return {
    "formTitle": formTitle,
    "formContent": formContent,
    "formId": formId
  };
}

// añadir FormData a la tabla en celdas nuevas
function insertRowLinksTable(formObj) {
  let newLinksRowRef = linksTableRef.insertRow(-1);
  newLinksRowRef.setAttribute("data-form-Id", formObj["formId"]);

  let newLinksCellRef = newLinksRowRef.insertCell(0);
  let linkAdded = document.createElement("a");
  linkAdded.href = formObj["formContent"];
  linkAdded.textContent = formObj["formTitle"];
  linkAdded.target = "_blank";
  newLinksCellRef.appendChild(linkAdded);

  newLinksCellRef = newLinksRowRef.insertCell(1);
  btnDelete = document.createElement("button");
  btnDelete.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
  // btnDelete.textContent = "Delete";
  newLinksCellRef.appendChild(btnDelete);

  btnDelete.addEventListener("click", deleteEntry);
  function deleteEntry(ev) {
    let linkRow = ev.target.parentNode.parentNode;
    let formId = linkRow.getAttribute("data-form-Id");
    linkRow.remove();
    delLinkObj(formId);
  }
}

function saveLinksObj(formObj) {
  let linksArr = JSON.parse(localStorage.getItem("linksData")) || [];
  linksArr.push(formObj);
  let linksArrJSON = JSON.stringify(linksArr);
  localStorage.setItem("linksData", linksArrJSON);
}
