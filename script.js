function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let results = document.getElementById("results");

    results.innerHTML = "";

    if (input.includes("plage")) {
        results.innerHTML = `
            <h2>Plages 🌊</h2>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400">
            <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400">
        `;
    }

    else if (input.includes("temple")) {
        results.innerHTML = `
            <h2>Temples 🛕</h2>
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400">
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400">
        `;
    }

    else if (input.includes("pays")) {
        results.innerHTML = `
            <h2>Pays 🌍</h2>
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400">
        `;
    }

    else {
        results.innerHTML = "<p>Aucun résultat trouvé</p>";
    }
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}