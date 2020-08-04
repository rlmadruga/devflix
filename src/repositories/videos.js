import config from "../config";

const URL_VIDEOS = `${config.URL}/videos`;

function create(objVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objVideo),
  }).then(async (serveResponse) => {
    if (serveResponse.ok) {
      const response = await serveResponse.json();
      return response;
    }

    throw new Error("We couldn't register your video. Try again!");
  });
}

export default {
  create,
};
