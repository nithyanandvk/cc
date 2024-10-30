function toggleFaq(element) {
    const body = element.nextElementSibling;
    const symbol = element.querySelector(".toggle-symbol");

    if (body.style.display === "none" || body.style.display === "") {
        body.style.display = "block";
        symbol.textContent = "x";
    } else {
        body.style.display = "none";
        symbol.textContent = "+";
    }
}