let links = document.querySelectorAll(".nav-links li");

links.forEach((link) => {
	link.addEventListener("click", () => {
		links.forEach((link) => {
			link.classList.remove("active");
		});
		link.classList.add("active");
	});
});
