import config from "../config";

const URL_CATEGORIES = `${config.URL}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (serveResponse) => {
    if (serveResponse.ok) {
      const response = await serveResponse.json();
      return response;
    }

    throw new Error(" Database is offline ");
  });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (serveResponse) => {
    if (serveResponse.ok) {
      const response = await serveResponse.json();
      return response;
    }

    throw new Error(" Database is offline ");
  });
}

export default {
  getAll,
  getAllCategoriesWithVideos,
};
