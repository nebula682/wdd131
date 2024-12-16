// Dynamic Recipes Loading
const recipes = [
    { name: "Avocado Toast", category: "Breakfast" },
    { name: "Quinoa Salad", category: "Lunch" },
    { name: "Grilled Salmon", category: "Dinner" },
];

const recipesContainer = document.getElementById('recipes-container');
const searchBar = document.getElementById('search-bar');

function displayRecipes(filter = "") {
    recipesContainer.innerHTML = recipes
        .filter(recipe => recipe.name.toLowerCase().includes(filter.toLowerCase()))
        .map(recipe => `<div class="recipe-item">${recipe.name} - ${recipe.category}</div>`)
        .join('');
}

searchBar.addEventListener('input', () => displayRecipes(searchBar.value));
displayRecipes();

// Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
    alert('Thank you for reaching out!');
});