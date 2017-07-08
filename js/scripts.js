var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "The_name_of_dinosaur";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace(text.split(" ", 1), dinosaurUpperCased.split(" ", 1));
console.log(textCharsAfter);
var partOftextCharsAfter = textCharsAfter.slice(0, textCharsAfter.length/2);
console.log(partOftextCharsAfter);

