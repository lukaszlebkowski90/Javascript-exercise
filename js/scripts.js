function drawTree (k) {
	for (var i = 0; k >= i; i++) {
        var star = "";
        for (var j = 0; i > j; j++) {
            star += " * ";
        } console.log(star);
    }
}
drawTree(1);
drawTree(3);
drawTree(5);

