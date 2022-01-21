const linksForm = document.getElementById('links-form');

// const formTitle = document.getElementById('form-title');

// const formContent = document.getElementById('form-content');

let linksTableRef = document.getElementById('table-body');

linksForm.addEventListener('submit', sendForm);




// convertir contenido de formulario en FormData()
function sendForm(event) {
    event.preventDefault();
    let linksFormData = new FormData(linksForm);
    inserRowLinksTable(linksFormData);    
}

// añadir FormData a la tabla en celdas nuevas
function inserRowLinksTable(linksFormData) {
    let newLinksRowRef = linksTableRef.insertRow(-1);
    
    // let newLinksCellRef = newLinksRowRef.insertCell(0);
    // newLinksCellRef.textContent = linksFormData.get('form-title');

    newLinksCellRef = newLinksRowRef.insertCell(0);
    // newLinksCellRef.textContent = linksFormData.get('form-content');
    let linkAdded = document.createElement('a');
    linkAdded.href = linksFormData.get('form-content');
    linkAdded.textContent = linksFormData.get('form-title');
    linkAdded.target = '_blank';
    newLinksCellRef.appendChild(linkAdded);

    newLinksCellRef = newLinksRowRef.insertCell(1);
    
    newLinksCellRef.textContent = "button";
}