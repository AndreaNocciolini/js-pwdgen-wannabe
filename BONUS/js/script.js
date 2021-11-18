// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let name = prompt(`What's your name?`);
console.log(`name ` + name);

let surname = prompt(`What's your surname?`);
console.log(`surname ` + surname);

let favouriteColor = prompt(`And your favourite color is?`);
console.log(`favouriteColor ` + favouriteColor);

let conclusion = `<p>Ok, so your name is <span class="name-color">${name}</span> <span class="surname-color">${surname}</span> and your favourite color is <span class="fc-color">${favouriteColor}</span>. Nice! 21!</p>`;

console.log(conclusion);
document.getElementById(`my_div`).innerHTML = conclusion;

