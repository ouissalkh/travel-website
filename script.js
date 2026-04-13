function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let results = document.getElementById("results");

    results.innerHTML = "";

    if (input.includes("plage")) {
        results.innerHTML = `
            <h2>Plages 🌊</h2>
            <img src="https://source.unsplash.com/200x200/?beach">
            <img src="https://source.unsplash.com/200x200/?sea">
        `;
    }

    else if (input.includes("temple")) {
        results.innerHTML = `
            <h2>Temples 🛕</h2>
            <img src="https://source.unsplash.com/200x200/?temple">
            <img src="https://source.unsplash.com/200x200/?shrine">
        `;
    }

    else if (input.includes("pays")) {
        results.innerHTML = `
            <h2>Pays 🌍</h2>
            <img src="https://source.unsplash.com/200x200/?france">
            <img src="https://source.unsplash.com/200x200/?japan">
        `;
    }

    else {
        results.innerHTML = "<p>Aucun résultat trouvé</p>";
    }
}