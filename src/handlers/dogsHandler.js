'use strict'

function dogsHandler(axios) {
  return async (req, res) => {
    try {
      const dogResponse = await axios.get('https://dog.ceo/api/breeds/image/random');
      const dogData = await dogResponse.data;
      res.status(200).send(dogData);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = dogsHandler;
