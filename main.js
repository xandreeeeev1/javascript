// Select the button element by its ID
const alertButton = document.getElementById('alertButton');

// Change text when mouse hovers over the button
alertButton.onmouseover = () => {
  alertButton.innerText = "Hovering!";
};

// Revert text when mouse leaves the button
alertButton.onmouseout = () => {
  alertButton.innerText = "Click Me";
};

// Add a click event listener for the alert
alertButton.addEventListener('click', () => {
  alert('Button clicked!');
});

// Select the ordered list by its ID
const orderedList = document.getElementById('numbers');

// Loop to generate 12 list items
for (let i = 1; i <= 12; i++) { // Start with 1, go to 12
  // Create a new <li> element
  const listItem = document.createElement('li');

  // Set the text content of the <li> element based on even or odd
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

  // Append the <li> element to the <ol>
  orderedList.appendChild(listItem);
}
for (let i = 1; i <= 12; i++) {
  // Rest of the loop remains the same
}

