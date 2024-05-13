const axios = require('axios');

function getBase64FromUrl(url) {
  return new Promise((resolve, reject) => {
    axios.get(url, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = Buffer.from(response.data).toString('base64');
        resolve(`data:${response.headers['content-type']};base64,${base64}`);
      })
      .catch(reject);
  });
}

// Use the function
getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
  .then(console.log)
  .catch(console.error);
