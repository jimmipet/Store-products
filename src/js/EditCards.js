
// export const elements = document.querySelectorAll(".cards-box__item i");
// elements.forEach(function(element) {
// 	element.addEventListener("click", function() {
// 		console.log("Clicked!");
// 	});
// });

export function editCards(){
	const elements = document.querySelectorAll(".cards-box__item i");
	elements.forEach(function(element) {
	element.addEventListener("click", function() {
		console.log("Clicked!");
	});
});
}