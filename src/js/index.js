import { fetchBreeds, fetchCatByBreed } from './cat-api';
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catImage = catInfo.querySelector('img');
// Hide breed select, cat info, and error initially
breedSelect.style.display = 'none';
catInfo.style.display = 'none';
error.style.display = 'none';
// Show loader
loader.style.display = 'block';
// Fetch and populate breed select options
fetchBreeds()
    .then(breeds => {
        breedSelect.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
        // Show breed select
        breedSelect.style.display = 'block';
        // Hide loader
        loader.style.display = 'none';
    })
    .catch(err => {
        error.style.display = 'block';
        console.error(err);
        // Hide loader in case of an error
        loader.style.display = 'none';
    });
// Event listener for breed select change
breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;
    // Hide breed select, cat info, and error
    breedSelect.style.display = 'none';
    catInfo.style.display = 'none';
    error.style.display = 'none';
    // Show loader
    loader.style.display = 'block';
    // Fetch cat information by breed
    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            const cat = catData[0];
            breedName.textContent = cat.breeds[0].name;
            description.textContent = cat.breeds[0].description;
            temperament.textContent = cat.breeds[0].temperament;
            catImage.src = cat.url;
            catImage.style.maxWidth = '300px';
            catImage.style.height = 'auto';
            // Hide loader
            loader.style.display = 'none';
            // Show cat info
            catInfo.style.display = 'block';
            // Show breed select after displaying options
            breedSelect.style.display = 'block';
        })
        .catch(err => {
            error.style.display = 'block';
            console.error(err);
            // Hide loader in case of an error
            loader.style.display = 'none';
        });
});
