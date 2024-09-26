import axios from 'axios';
export const BASE_URL = "https://pixabay.com/";
export const API_KEY = "46035162-73af77dc9f391d36c3be30780";

export let pageNumber = 1;
export let perPage = 15; 


export async function queryFunction (query, pageNumber) {
const options = {
  key: API_KEY,
  q: query,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
  page: pageNumber,
  per_page: perPage,
};

const params = new URLSearchParams(options);

try {
const response = await axios.get(`${BASE_URL}api/?${params}`)
    console.log(response.data);
    return response.data;
  }
  catch (error) {
console.error(error);
throw error;
  }
}

