function show() {
    let dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
}