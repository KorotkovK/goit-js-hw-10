import axios from "axios";

const apiKey = "live_L1zVCOGhnTR8sRi4MbXLfDG00nqK4NCYyaMNvjvUOK3s7GHPHRZtcXmkTzpgOV2J";

axios.defaults.headers.common["x-api-key"] = apiKey;

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => response.data);
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data);
}
