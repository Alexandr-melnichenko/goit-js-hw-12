export const BASE_URL = "https://pixabay.com/";
export const API_KEY = "46035162-73af77dc9f391d36c3be30780";


export function queryFunction (query) {
const options = {
  key: API_KEY,
  q: query,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
};

const params = new URLSearchParams(options);

return fetch(`${BASE_URL}api/?${params}`)
.then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}
