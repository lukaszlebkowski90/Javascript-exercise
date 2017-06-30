// Zadanie: Instrukcje warunkowe w praktyce
// Stwórz zmienne potrzebne do wykonania działania (a * a) + (2 * a * b) - (b * b) , a jego wynik przypisz do zmiennej value. Wyświetl wynik w konsoli, a następnie za pomocą instrukcji warunkowej sprawdź, czy wynik jest dodatni czy ujemny, a potem wyświetl informację wynik dodatni lub wynik ujemny w konsoli.
// Dodaj instrukcję, która sprawdzi, czy wynik jest równy zero i wyświetli tę informację.
//  Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.


var a = prompt("wpisz liczbe");
var b = prompt("wpisz liczbe");
var c = (a * a) + (2 * a * b) - (b * b);

    if (c > 0) {
        alert("Liczba jest dodatnia");
        console.log("Liczba jest dodatnia");
}   else if (c < 0) {
        alert("Liczba jest ujemna");
        console.log("Liczba jest ujemna");
}   else {
        alert("Wynik = 0");
        console.log("Wynik = 0");
}
