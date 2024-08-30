const foodItems = [
  {
    name: "Ramen bowl",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.x-1Rn2BPDZ8QNjTmUbx3QAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3",
  },
  {
    name: "Chapati",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.2QoIkJxfhNslsJrY8k2TfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

let neededFoods = [];
document.addEventListener("DOMContentLoaded", function () {
  let neededFoods = JSON.parse(localStorage.getItem("neededFoods"));
  if (neededFoods) {
    renderFoodItems(neededFoods, foodItems);
  } else {
    console.error("No data found in local storage");
  }
});

function renderFoodItems(neededFoods, foodItems) {
  const container = document.getElementById("food-item");
  if (container) {
    container.innerHTML = "";

    neededFoods.forEach((itemIndex, arrayIndex) => {
      const item = foodItems[itemIndex];
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("item-container");

      itemContainer.innerHTML = `
        <img src="${item.web}" alt="${item.name}">
        <div class="item-info">
          <h2>${item.name}</h2>
          <p>Rs. ${(item.price * item.count).toFixed(2)}</p>
        </div>
        <div class="item-third">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onclick="removeItem(${arrayIndex})">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
          <div class="item-counter">
            <button onclick="decrement(${arrayIndex})">-</button>
            <p id="counter-${arrayIndex}">${item.count}</p>
            <button onclick="increment(${arrayIndex})">+</button>
          </div>
        </div>
      `;
      container.appendChild(itemContainer);
    });
  } else {
    console.error("Element with ID 'food-item' not found");
  }
}

function increment(index) {
  foodItems[neededFoods[index]].count++;
  document.getElementById(`counter-${index}`).innerText =
    foodItems[neededFoods[index]].count;
}

function decrement(index) {
  if (foodItems[neededFoods[index]].count > 0) {
    foodItems[neededFoods[index]].count--;
    document.getElementById(`counter-${index}`).innerText =
      foodItems[neededFoods[index]].count;
  }
}

function removeItem(index) {
  foodItems.splice(neededFoods[index], 1);
  neededFoods.splice(index, 1);
  renderFoodItems(neededFoods, foodItems);
}
