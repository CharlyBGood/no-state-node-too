// select button
// let formBtn = document.getElementById('form-btn');

// select table to fill 
// let linksTable = document.getElementById('links-table');


// let formTitle = document.getElementById('form-title');
// let formContent = document.getElementById('form-content');

// let tableBody = document.getElementById('table-body');



// let linksForm = document.getElementById('links-form');
// linksForm.addEventListener('submit', addlinksForm);

// function addlinksForm(ev) {
//     ev.preventDefault();
//     let transactionFormData = new FormData(linksForm);
//     let newLinksRow = tableBody.insertRow(-1);
//     let newLinksCell = newLinksRow.insertCell(0);
    
// }



//  -------------------------------

const linksForm = document.getElementById('links-form');

// const formTitle = document.getElementById('form-title');

// const formContent = document.getElementById('form-content');

let linksTableRef = document.getElementById('table-body');

linksForm.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
    let linksFormData = new FormData(linksForm);
    inserRowLinksTable(linksFormData);
    
}

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