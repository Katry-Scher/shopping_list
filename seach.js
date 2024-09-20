// RECIPES SEACH

const APP_ID = 'c1d1d5a7';  // Substitua com seu App ID
const APP_KEY = 'cde51eecf7ef9fcdd852cd9e345ffbb6';  // Substitua com sua chave da API

document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('query').value;
    if (query.trim() !== "") {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ''; // Limpa resultados anteriores
                data.hits.forEach(hit => {
                    const recipe = document.createElement('div');
                    recipe.className = 'recipe';
                    recipe.innerHTML = `
                        <h2>${hit.recipe.label}</h2>
                        <img src="${hit.recipe.image}" alt="${hit.recipe.label}">
                        <p>Ingredientes: ${hit.recipe.ingredientLines.join(', ')}</p>
                    `;
                    resultsDiv.appendChild(recipe);
                });
            })
            .catch(error => console.error('Erro:', error));
    } else {
        alert("Por favor, digite um ingrediente.");
    }
});
