var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace("Velociraptor",dinosaurUpperCased);
console.log(textCharsAfter);
var partOftextCharsAfter = textCharsAfter.slice(0,textCharsAfter.length/2);
console.log(partOftextCharsAfter);

// Debugging with legacy protocol because Node.js v6.11.0 was detected.
// node --debug-brk=8993 --nolazy scripts.js 
// Debugger listening on [::]:8993
// TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.
// TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first app
