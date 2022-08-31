const loadMeal = () =>{
    let searchMealField = document.getElementById('input-meal');
    let searchFood = searchMealField.value;
    searchMealField.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    .then(res=>res.json())
    .then(data=>displayFood(data));
}
const displayFood = (data) =>{
    const foods = data.meals;
    const cardContainer = document.getElementById('cards');
    foods.forEach(food=>{
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${food.strMeal}</h5>
              <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
            <div class="card-footer bg-danger text-center" onclick="loadDetails(${food.idMeal})">
              <small class="text-white fw-bold" >See Details</small>
            </div>
          </div>
        `;
        cardContainer.appendChild(card);
    })
}
const loadDetails = (id) =>{
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayDetails(data));
}

const displayDetails = (data) =>{
  const food = data.meals[0];
  console.log(food);
  const singleMeal = document.getElementById('single-meal');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${food.strMealThumb}" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${food.strMeal}</h5>
    <p class="card-text">${food.strInstructions}</p>
    <a href="${food.strYoutube}" class="btn btn-primary">Order Now</a>
  </div>
  `;
  singleMeal.appendChild(div);

}