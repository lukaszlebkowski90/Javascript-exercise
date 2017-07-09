function getTriangleArea(a, h) {
	if (a > 0 && h > 0) 
		return a * h / 2;
		return "niewłaściwe dane";
}
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(2, 15);
var triangle3Area = getTriangleArea(-4, 6);
console.log(getTriangleArea(4,15));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);