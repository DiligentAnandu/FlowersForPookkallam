const searchButton = document.getElementById('searchButton');
const colorInput = document.getElementById('colorInput');
const flowerResults = document.getElementById('flowerResults');

searchButton.addEventListener('click', () => {
  const color = colorInput.value;
  
  fetch(`http://localhost:3000/api/flowers/${color}`)
    .then(response => response.json())
    .then(data => {
      flowerResults.innerHTML = '';

      if (data.length === 0) {
        flowerResults.innerHTML = `<p>No flowers found for "${color}"</p>`;
      } else {
        data.forEach(flower => {
          const flowerDiv = document.createElement('div');
          flowerDiv.innerText = `${flower.name} (Available colors: ${flower.colors.join(', ')})`;
          flowerResults.appendChild(flowerDiv);
        });
      }
    });
});
