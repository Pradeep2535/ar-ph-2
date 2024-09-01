let customerName = 'Pradeep';
            let customerMobileNumber = 8838909289;
            let totalAmount = 0;
            
            let currentDate = new Date();

        // Get the individual components of the date and time
            let year = currentDate.getFullYear();
            let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            let day = String(currentDate.getDate()).padStart(2, '0');
            let hours = String(currentDate.getHours()).padStart(2, '0');
            let minutes = String(currentDate.getMinutes()).padStart(2, '0');
            let seconds = String(currentDate.getSeconds()).padStart(2, '0');

            

            let linkId = `${customerMobileNumber}${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
            
            
            document.getElementById("total").innerText = `Rs. 0`
            document.getElementById("tax_val").innerText = `Rs. 0`
            document.getElementById("subtotal").innerText = `Rs. 0`

            


            function redirectToPaymentLink() {
                console.log(linkId);
                document.getElementById('loaderOverlay').style.display = 'block';
                document.getElementById('loader').style.display = 'block';
                const url = `https://ap8pp3x3dg.execute-api.ap-south-1.amazonaws.com/test/hi?link_id=${linkId}&total=${totalAmount}&name=${customerName}&phoneNumber=${customerMobileNumber}`;
        
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.status_code === 200 && data.payment_link) {
                            console.log('Redirecting to:', data.payment_link);
                            // Redirect to the payment link
                            window.location.href = data.payment_link;
                        } else {
                            console.error('Unexpected response data:', data);
                            hideLoader(); 
                        }
                    })
                    .catch(error => {
                         console.error('Request failed:', error);
                         hideLoader();
                        });
            }


            function hideLoader() {
            // Hide the loader and overlay
            document.getElementById('loaderOverlay').style.display = 'none';
            document.getElementById('loader').style.display = 'none';
            }
        
            // Attach event listener to the button
            document.getElementById('checkout-button').onclick = redirectToPaymentLink;



const foodItems = [
  {
    name: "Chapati",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.2QoIkJxfhNslsJrY8k2TfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
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
  {
    name: "Frankie",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.x-1Rn2BPDZ8QNjTmUbx3QAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3",
  },
  {
    name: "Noodles",
    price: 100.0,
    count: 1,
    web: "https://www.thespruceeats.com/thmb/b5TG9lMFOtAmFkqWoOzMaRvL2Fk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-southern-fried-chicken-3056867-hero-01-58b66ff9e2f14b86bfdd50c7088cfe45.jpg",
  },
  {
    name: "Fish",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.8-hIBxuk2aR5lmY7CHN38wHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model7",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.ruNe8SGMprPczHMTKOjV-QHaE5?w=296&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model8",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.tTYO2xFwhnWqthCpnPT97gHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Noodles",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.te9gPiD8UiUZ0XQ1qcAjEAHaEL?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model10",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.ga0ROyhrbeISa3RuFVB34gHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model11",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.occg_F34lY-U35Ywbgs-uQHaE7?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model12",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model13",
    price: 100.0,
    count: 1,
    web: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/admin/How_To_Make_Homemade_Idiyappam_Recipe__Rice_Sevai_Recipe_1600.jpg",
  },
  {
    name: "model14",
    price: 100.0,
    count: 1,
    web: "https://th.bing.com/th/id/OIP.ugOanrbz8U_Inxwinpv4pQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "model15",
    price: 100.0,
    count: 1,
    web: "",
  },
  {
    name: "model16",
    price: 100.0,
    count: 1,
    web: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Farrukh_Aziz_Ansari/Bedmi_Poori.jpg",
  },
  {
    name: "model17",
    price: 100.0,
    count: 1,
    web: "https://i0.wp.com/www.relishthebite.com/wp-content/uploads/2015/05/Kothuparotta8.jpg",
  },
  {
    name: "model18",
    price: 100.0,
    count: 1,
    web: "https://s3.scoopwhoop.com/dan/29/2.jpg",
  },
  {
    name: "model19",
    price: 100.0,
    count: 1,
  },
];

let neededFoods = [];
document.addEventListener("DOMContentLoaded", function () {
  neededFoods = JSON.parse(localStorage.getItem("neededFoods"));
  if (neededFoods) {
    renderFoodItems(neededFoods, foodItems);
  } else {
    console.error("No data found in local storage");
  }
});


let subtotal = 0;
function renderFoodItems(neededFoods, foodItems) {
  const container = document.getElementById("food-item");
  subtotal = 0; 

  if (container) {
    container.innerHTML = "";

    neededFoods.forEach((itemIndex, arrayIndex) => {
      const item = foodItems[itemIndex];
      const itemTotal = item.price * item.count;
      subtotal += itemTotal;
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
    updateTotals();
  } else {
    console.error("Element with ID 'food-item' not found");
  }
}

// function renderFoodItems(neededFoods, foodItems) {
//   const container = document.getElementById("food-item");
//   let subtotal = 0;
//   if (container) {
//     container.innerHTML = "";

//     neededFoods.forEach((itemIndex, arrayIndex) => {
//       const item = foodItems[itemIndex];
//       const itemTotal = item.price * item.count;
//       subtotal += itemTotal;
//       const itemContainer = document.createElement("div");
//       itemContainer.classList.add("item-container");

//       itemContainer.innerHTML = `
//         <img src="${item.web}" alt="${item.name}">
//         <div class="item-info">
//           <h2>${item.name}</h2>
//           <p>Rs. ${(item.price * item.count).toFixed(2)}</p>
//         </div>
//         <div class="item-third">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onclick="removeItem(${arrayIndex})">
//             <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//           </svg>
//           <div class="item-counter">
//             <button onclick="decrement(${arrayIndex})">-</button>
//             <p id="counter-${arrayIndex}">${item.count}</p>
//             <button onclick="increment(${arrayIndex})">+</button>
//           </div>
//         </div>
//       `;
//       container.appendChild(itemContainer);
//     });
//     const tax = subtotal * 0.02;
//     const total = subtotal + tax;

//     // Update the HTML elements with the calculated values
//     document.getElementById("subtotal").innerText = `Rs. ${subtotal.toFixed(2)}`;
//     document.getElementById("tax_val").innerText = `Rs. ${tax.toFixed(2)}`;
//     document.getElementById("total").innerText = `Rs. ${total.toFixed(2)}`;
//   } else {
//     console.error("Element with ID 'food-item' not found");
//   }
// }

// function increment(index) {
//   foodItems[neededFoods[index]].count++;
//   document.getElementById(`counter-${index}`).innerText =
//     foodItems[neededFoods[index]].count;
// }

// function decrement(index) {
//   if (foodItems[neededFoods[index]].count > 0) {
//     foodItems[neededFoods[index]].count--;
//     document.getElementById(`counter-${index}`).innerText =
//       foodItems[neededFoods[index]].count;
//   }
// }

// function removeItem(index) {
//   foodItems.splice(neededFoods[index], 1);
//   neededFoods.splice(index, 1);
//   renderFoodItems(neededFoods, foodItems);
// }
function increment(index) {
  foodItems[neededFoods[index]].count++;
  document.getElementById(`counter-${index}`).innerText =
    foodItems[neededFoods[index]].count;
  updateTotals();
}


function updateTotals() {
  let subtotal = 0;
  neededFoods.forEach((itemIndex) => {
    const item = foodItems[itemIndex];
    subtotal += item.price * item.count;
  });

  const tax = subtotal * 0.02;
  const total = subtotal + tax;

  document.getElementById("subtotal").innerText = `Rs. ${subtotal.toFixed(2)}`;
  document.getElementById("tax_val").innerText = `Rs. ${tax.toFixed(2)}`;
  document.getElementById("total").innerText = `Rs. ${total.toFixed(2)}`;
}


function decrement(index) {
  if (foodItems[neededFoods[index]].count > 0) {
    foodItems[neededFoods[index]].count--;
    document.getElementById(`counter-${index}`).innerText =
      foodItems[neededFoods[index]].count;
    if (foodItems[neededFoods[index]].count === 0) {
      removeItem(index);
    } else {
      updateTotals();
    }
  }
}


function removeItem(index) {
  neededFoods.splice(index, 1);
  renderFoodItems(neededFoods, foodItems);
  updateTotals();
}

