// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// let name = prompt(`What's your name?`);
// console.log(`name ` + name);

// let surname = prompt(`What's your surname?`);
// console.log(`surname ` + surname);

// let favouriteColor = prompt(`And your favourite color is?`);
// console.log(`favouriteColor ` + favouriteColor);

// let password = `${name}${surname}${favouriteColor}21`;

// console.log(password);
// document.getElementById(`my_div`).innerHTML = password;


// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5

let name = prompt(`What's your name?`);
console.log(`name: ` + name);

let surname = prompt(`What's your surname?`);
console.log(`surname: ` + surname);

let favouriteColor = prompt(`And your favourite color is?`);
console.log(`favouriteColor: ` + favouriteColor);

let favouriteNumber =parseInt(prompt(`What about your favourite number?`));
console.log(`favouriteNumber: ` + favouriteNumber);

let sum = favouriteNumber + 5;
console.log(`sum: ` + sum)

let password = `${name}${surname}${favouriteColor}${sum}`;

console.log(password);
document.getElementById(`my_div`).innerHTML = password;
