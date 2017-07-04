// Zadeklaruj dwie tablice: jedną zawierające imiona damskie oraz drugą - męskie.

// Połącz dwie tablice w jedną zawierającą wszystkie imiona.

// Za pomocą dostępnych funkcji i przy użyciu instrukcji warunkowej spróbuj dodać jakieś imię.

// Uwaga: jeśli imię znajduje się już w tablicy, nie może być dodane ponownie.

// Sprawdź, czy wszystko działa prawidłowo. Czy dodawanie nowych imion do tablicy jest możliwe, a jednocześnie zostało zablokowane dodawanie duplikatów?

// W pliku 'scripts.js' zadeklaruj dwie tablice:

// var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
// var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];Copy
// Użyj funkcji concat(), aby połączyć ze sobą powyższe dwie tablice i przypisz je do zmiennej allNames.

// Poniżej zadeklaruj nową zmienną zawierającą napis var newName = 'Marian'

// Stwórz instrukcję warunkową if i sprawdź, czy wartość wyrażenia allNames.indexOf(newName) === -1.

// Jeśli powyższe wyrażenie jest spełnione, za pomocą funkcji push() dodaj tę zmienną do tablicy allNames.

// Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.

var femaleNames = ['Mariola', 'Jolasia', 'Halina', 'Helena'];
var maleNames = ['Ferdek', 'Pazdzioch', 'Waldus', 'Boczek'];
var all = [];
var allNames = all.concat(femaleNames,maleNames);
console.log(allNames);
var newName = "menda";
	if ( allNames.indexOf(newName)  ===  -1) {
  	return allNames.push(newName);
  } else {
  };

// Debugging with legacy protocol because Node.js v6.11.0 was detected.
// node --debug-brk=3605 --nolazy scripts.js 
// Debugger listening on [::]:3605
// [ 'Mariola',
//   'Jolasia',
//   'Halina',
//   'Helena',
//   'Ferdek',
//   'Pazdzioch',
//   'Waldus',
//   'Boczek' ]

