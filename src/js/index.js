import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// Fetch and populate breed select options
fetchBreeds()
    .then(breeds => {
        breedSelect.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
    })
    .catch(err => {
        error.style.display = 'block';
        console.error(err);
    });

// Event listener for breed select change
breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    // Hide cat info and show loader
    catInfo.style.display = 'none';
    loader.style.display = 'block';
    error.style.display = 'none';

    // Fetch cat information by breed
    fetchCatByBreed(selectedBreedId)
        .then(catData => {
            const cat = catData[0];
            breedName.textContent = cat.breeds[0].name;
            description.textContent = cat.breeds[0].description;
            temperament.textContent = cat.breeds[0].temperament;
            catInfo.querySelector('img').src = cat.url;

            // Show cat info and hide loader
            catInfo.style.display = 'block';
            loader.style.display = 'none';
        })
        .catch(err => {
            error.style.display = 'block';
            console.error(err);
        });
});
