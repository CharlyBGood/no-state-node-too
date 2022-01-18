// select button
// let formBtn = document.getElementById('form-btn');

// select table to fill 
// let linksTable = document.getElementById('links-table');


// let formTitle = document.getElementById('form-title');
// let formContent = document.getElementById('form-content');

// let tableBody = document.getElementById('table-body');



// let linksForm = document.getElementById('links-form');
// linksForm.addEventListener('submit', addFormLinks);

// function addFormLinks(ev) {
//     ev.preventDefault();
//     let transactionFormData = new FormData(linksForm);
//     let newLinksRow = tableBody.insertRow(-1);
//     let newLinksCell = newLinksRow.insertCell(0);
    
// }



//  -------------------------------

const formLinks = document.getElementById('links-form');

formLinks.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
    console.log(event);
    alert('formulario enviado');
}