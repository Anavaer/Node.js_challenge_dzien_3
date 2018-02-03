//Twój kod
const fs = require('fs');
const crypto = require('crypto');
//4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca
function readAndEncode(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err === null) {
      const hash = crypto.createHmac('sha256', data)
        .digest('hex');
      console.log(hash);
      return hash;
    } else {
      console.log('nie udało się odczytać pliku');
    }
  })
}

readAndEncode(process.argv[2]);
